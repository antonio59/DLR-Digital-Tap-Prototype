'use client'

import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, getDoc, updateDoc, increment, setDoc } from 'firebase/firestore';
import { Button } from "@/components/ui/button";
import { ThumbsUpIcon, ShareIcon } from 'lucide-react';

interface VoteStats {
  count: number;
}

export default function SupportVote() {
  const [voteCount, setVoteCount] = useState<number>(0);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const checkVoteStatus = async () => {
      setIsLoading(true);
      const voted = localStorage.getItem('dlr-prototype-voted');
      if (voted) {
        setHasVoted(true);
      }
      
      try {
        const voteDoc = doc(db, 'stats', 'votes');
        const voteSnapshot = await getDoc(voteDoc);
        
        if (voteSnapshot.exists()) {
          const data = voteSnapshot.data() as VoteStats;
          setVoteCount(data.count);
        } else {
          await setDoc(voteDoc, { count: 0 });
        }
      } catch (error) {
        console.error("Error fetching vote count:", error);
      }
      
      setIsLoading(false);
    };
    
    checkVoteStatus();
  }, []);
  
  const handleVote = async () => {
    if (!hasVoted && !isLoading) {
      try {
        const voteDoc = doc(db, 'stats', 'votes');
        await updateDoc(voteDoc, {
          count: increment(1)
        });
        
        setVoteCount(prev => prev + 1);
        setHasVoted(true);
        localStorage.setItem('dlr-prototype-voted', 'true');
      } catch (error) {
        console.error("Error updating vote:", error);
      }
    }
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'DLR Digital Tap',
        text: 'I just supported the DLR Digital Tap solution to improve London\'s transport experience! Join me and show your support too!',
        url: window.location.href,
      }).catch(console.error);
    }
  };
  
  return (
    <div className="flex flex-col space-y-4 bg-blue-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">Support This Initiative</h3>
      <p className="text-gray-600">
        Help us improve the DLR experience by showing your support. 
        Every vote helps us demonstrate to TFL that Londoners want this solution!
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button
          onClick={handleVote}
          disabled={hasVoted || isLoading}
          className="w-full sm:w-auto"
          variant={hasVoted ? "secondary" : "default"}
        >
          <ThumbsUpIcon className="mr-2 h-4 w-4" />
          {isLoading ? 'Loading...' : hasVoted ? `${voteCount} Supporters` : 'Support This Solution'}
        </Button>
        
        {hasVoted && (
          <Button
            onClick={handleShare}
            variant="outline"
            className="w-full sm:w-auto"
          >
            <ShareIcon className="mr-2 h-4 w-4" />
            Share
          </Button>
        )}
      </div>
    </div>
  );
}
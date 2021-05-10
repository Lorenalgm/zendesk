
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './styles.css';

function AgentsSkeleton() {

    return (
        <div className="skeleton-container">
        <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124" >
            <div className="cardSkeleton">
                <Skeleton height={'100%'} width={'100%'} />
            </div>
        </SkeletonTheme>

        <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124" >
            <div className="cardSkeleton">
                <Skeleton height={'100%'} width={'100%'} />
            </div>
        </SkeletonTheme>


        <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124" >
            <div className="cardSkeleton">
                <Skeleton height={'100%'} width={'100%'} />
            </div>
        </SkeletonTheme>


        <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124" >
            <div className="cardSkeleton">
                <Skeleton height={'100%'} width={'100%'} />
            </div>
        </SkeletonTheme>

        <SkeletonTheme color="#1A1C1F" highlightColor="#1F2124" >
            <div className="cardSkeleton">
                <Skeleton height={'100%'} width={'100%'} />
            </div>
        </SkeletonTheme>
        </div>
    );
}

export default AgentsSkeleton;
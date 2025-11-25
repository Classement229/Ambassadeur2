import type { Candidate } from '../types';

interface CandidateRowProps {
  candidate: Candidate;
  rank: number;
  maxVotes: number;
}

function CandidateRow({ candidate, rank, maxVotes }: CandidateRowProps) {
  const barWidth = maxVotes > 0 ? (candidate.votes / maxVotes) * 100 : 0;
  const isFirst = rank === 1;

  return (
    <div className={`relative group ${isFirst ? 'mt-1' : ''}`}>
      {/* {isFirst && (
        <div className="hidden">
          <img src="/md1.png" alt="1st place" className="h-32 w-32 drop-shadow-xl" />
        </div>
      )} */}
      <div className="flex items-center gap-2 md:gap-3 bg-black/40 rounded-lg p-3 md:p-4 border border-white/5 hover:border-white/20 transition-all duration-300">
        <div className="flex-shrink-0 w-10 md:w-12 text-center">
          <span className="text-lg md:text-xl font-bold text-white">{rank}</span>
        </div>

        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-white font-medium text-sm md:text-base break-words flex-1">{candidate.name}</span>
            <span className="text-white font-bold text-sm md:text-lg flex-shrink-0">{candidate.votes}</span>
          </div>

          <div className="relative h-5 md:h-6 bg-white/10 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-white to-gray-300 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${barWidth}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateRow;

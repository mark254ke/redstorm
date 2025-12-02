import React, { useState, useEffect, useCallback } from 'react';

const USAGE_LIMIT = 2;
const STORAGE_KEY = 'ideaValidationUsage';

interface IdeaLimiterProps {
  children: (isBlocked: boolean, increment: () => void) => React.ReactNode;
}

export const IdeaLimiter: React.FC<IdeaLimiterProps> = ({ children }) => {
  const [usageCount, setUsageCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCount = localStorage.getItem(STORAGE_KEY);
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    setUsageCount(count);
  }, []);

  const isBlocked = usageCount >= USAGE_LIMIT;

  const incrementUsage = useCallback(() => {
    const newCount = usageCount + 1;
    setUsageCount(newCount);
    localStorage.setItem(STORAGE_KEY, newCount.toString());
  }, [usageCount]);

  useEffect(() => {
    if (isBlocked) {
      setIsModalOpen(true);
    }
  }, [isBlocked]);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {children(isBlocked, incrementUsage)}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-dark-800 rounded-lg p-8 max-w-sm w-full text-center border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Unlock Unlimited Idea Validation</h2>
            <p className="text-gray-400 mb-6">You've reached your limit for free idea validations. Sign up to continue or work with us for a deeper analysis.</p>
            <a
              href="/contact"
              className="bg-redstorm-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-redstorm-600 transition-colors w-full block"
            >
              Work With Redstorm Labs
            </a>
            <button
              onClick={closeModal}
              className="mt-4 text-gray-500 hover:text-white text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

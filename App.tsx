
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DisputeForm from './components/DisputeForm';
import DisputeList from './components/DisputeList';
import { Dispute, AppView, DisputeStatus } from './types';
import Button from './components/Button';
import { PlusIcon, ListIcon } from './constants';

// Mock service for dispute submission
const mockSubmitDispute = (dispute: Dispute): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Dispute submitted (mock):", dispute);
      resolve();
    }, 500);
  });
};

const App: React.FC = () => {
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [currentView, setCurrentView] = useState<AppView>(AppView.SUBMIT_DISPUTE);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // For global loading state if needed

  useEffect(() => {
    setIsLoading(true);
    const storedDisputes = localStorage.getItem('disputes');
    if (storedDisputes) {
      try {
        const parsedDisputes = JSON.parse(storedDisputes);
        if (Array.isArray(parsedDisputes)) {
          setDisputes(parsedDisputes);
        } else {
          localStorage.removeItem('disputes'); // Clear corrupted data
        }
      } catch (error) {
        console.error("Failed to parse stored disputes:", error);
        localStorage.removeItem('disputes'); // Clear corrupted data
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if(!isLoading) {
        localStorage.setItem('disputes', JSON.stringify(disputes));
    }
  }, [disputes, isLoading]);

  const displaySuccessMessage = (message: string) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(null), 3500);
  };

  const handleDisputeSubmit = useCallback(async (newDispute: Dispute) => {
    await mockSubmitDispute(newDispute);
    setDisputes(prevDisputes => [newDispute, ...prevDisputes]);
    displaySuccessMessage('Dispute submitted successfully!');
    setCurrentView(AppView.VIEW_DISPUTES);
  }, []);

  const handleUpdateDispute = useCallback((updatedDisputeData: Partial<Dispute> & { id: string }) => {
    setDisputes(prevDisputes =>
      prevDisputes.map(d => {
        if (d.id === updatedDisputeData.id) {
          const originalStatus = d.status;
          const newStatus = updatedDisputeData.status || originalStatus;
          let completionDate = d.completionDate;

          const isNowTerminal = newStatus === DisputeStatus.RESOLVED || newStatus === DisputeStatus.REJECTED;
          const wasTerminal = originalStatus === DisputeStatus.RESOLVED || originalStatus === DisputeStatus.REJECTED;

          if (isNowTerminal && (!wasTerminal || !completionDate)) {
            completionDate = new Date().toISOString();
          } else if (!isNowTerminal && wasTerminal) {
            completionDate = undefined; // Clear completion date if moved out of terminal state
          }
          
          return { ...d, ...updatedDisputeData, status: newStatus, completionDate };
        }
        return d;
      })
    );
    displaySuccessMessage(`Dispute ID: ${updatedDisputeData.id.substring(0,12)}... updated successfully!`);
  }, []);

  const renderView = () => {
    if (isLoading) {
        return <div className="text-center p-10">Loading disputes...</div>;
    }
    switch (currentView) {
      case AppView.SUBMIT_DISPUTE:
        return <DisputeForm onSubmit={handleDisputeSubmit} />;
      case AppView.VIEW_DISPUTES:
        // Pass only the necessary props, onUpdateDispute is now more generic
        return <DisputeList disputes={disputes} onUpdateDispute={handleUpdateDispute as (updatedDispute: Dispute) => void} />;
      default:
        return <DisputeForm onSubmit={handleDisputeSubmit} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex flex-wrap gap-2">
          <Button
            onClick={() => setCurrentView(AppView.SUBMIT_DISPUTE)}
            variant={currentView === AppView.SUBMIT_DISPUTE ? 'primary' : 'secondary'}
            className="flex items-center space-x-2"
            aria-pressed={currentView === AppView.SUBMIT_DISPUTE}
          >
            <PlusIcon />
            <span>Submit New Dispute</span>
          </Button>
          <Button
            onClick={() => setCurrentView(AppView.VIEW_DISPUTES)}
            variant={currentView === AppView.VIEW_DISPUTES ? 'primary' : 'secondary'}
            className="flex items-center space-x-2"
            aria-pressed={currentView === AppView.VIEW_DISPUTES}
          >
            <ListIcon />
            <span>View Submitted Disputes</span>
             {disputes.length > 0 && (
              <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-emerald-100 bg-emerald-700 rounded-full" aria-label={`${disputes.length} disputes`}>{disputes.length}</span>
            )}
          </Button>
        </div>

        {successMessage && (
          <div role="alert" className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md shadow-sm transition-opacity duration-300 ease-in-out fixed top-20 right-5 z-[100]">
            {successMessage}
          </div>
        )}

        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

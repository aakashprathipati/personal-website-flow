import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { BookOpen, X } from 'lucide-react';
import HTMLNotesWebsite from './HTMLNotesWebsite';

const HTMLNotesModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="cyber" 
          className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon"
        >
          <BookOpen className="w-5 h-5 mr-2" />
          Access Notes
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-background/95 backdrop-blur-sm border-2 border-primary/20">
        <div className="relative w-full h-full overflow-hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-full h-full overflow-y-auto">
            <HTMLNotesWebsite />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HTMLNotesModal;
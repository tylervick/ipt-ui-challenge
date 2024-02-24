'use client';

import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ElementRef, type PropsWithChildren, memo, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 1.0,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

/**
 * Modal component to be rendered on top of the current page.
 *
 * @param children - The content of the modal.
 */
const Modal = memo(function Modal({ children }: PropsWithChildren) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  // Ensure the modal is open when the component is mounted client-side
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return createPortal(
    <AnimatePresence>
      <div className='absolute top-0 left-0 right-0 bottom-0  z-[1000]'>
        <motion.dialog
          ref={dialogRef}
          className='border-none border-r-[12px] relative flex justify-center items-center'
          onClose={onDismiss}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 500,
          }}
          variants={dropIn}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {children}
          <Button
            className='absolute right-4 top-4 rounded-sm text-muted-foreground'
            size='icon'
            variant='outline'
            onClick={onDismiss}
          >
            <X />
          </Button>
        </motion.dialog>
      </div>
    </AnimatePresence>,
    // biome-ignore lint/style/noNonNullAssertion: model-root defined in layout.tsx
    document.getElementById('modal-root')!,
  );
});

export { Modal };

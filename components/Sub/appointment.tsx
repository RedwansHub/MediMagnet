'use client'

import { Button } from '@/components/ui/button';
import React, { useState, useEffect, useRef } from 'react';
import { PopupModal } from 'react-calendly';

type Props = {};

const Appointment = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const rootElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    rootElementRef.current = document.getElementById('root');
  }, []);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <Button variant={'default'}
        className='font-semibold px-6 hover:scale-105 duration-500 ease-in-out'
        onClick={handleModalOpen}>
        Book an Appointment
      </Button>
      {isOpen && rootElementRef.current && (
        <PopupModal
          url="https://calendly.com/notclone-00"
          onModalClose={handleModalClose}
          open={isOpen}
          rootElement={rootElementRef.current}
        />
      )}
    </div>
  );
};

export default Appointment;

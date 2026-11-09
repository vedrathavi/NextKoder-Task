"use Client"
import React from 'react'
import { MdArrowOutward } from 'react-icons/md';

interface PromoCardProps {
  title: string;
  caption: string;
  isLabel: boolean;
  label: string | null;
}

export default function PromoCard({title, caption,isLabel,label}: PromoCardProps) {
  return (
    <div className='flex w-50 h-40 p-4'>
      {isLabel ? <div>{label}</div> : <div />}
      <div className='flex flex-row'>
        <div className="flex flex-col gap-2">
          <div>{title}</div>
          <div>{caption}</div>
        </div>

        <button>
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
}

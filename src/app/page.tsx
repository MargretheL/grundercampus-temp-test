import React from 'react';
import BtnRound from './components/btnround';
import Location from './components/location';
import HeaderCstm from './components/headercstm';
import FooterCstm from './components/footercstm';

export default function Page() {
  return (
    <div className='bg-[url(/images/bg-small.png)] bg-cover bg-center h-screen w-screen'>
      <div className="flex justify-between items-center pt-20 px-4">
        <div className='flex flex-col gap-30 items-center w-full'>
          <div className='flex flex-row w-full justify-between'>
          <div className='w-18 md:w-40'>  
            <img src='/images/logo-blue.png' alt='logo' />
          </div>
            <div className='flex flex-col items-end gap-2'>
              <BtnRound text='Kick-off 9.april på The Hub'/>
              <Location text='Solheimsgaten 7C'/>
            </div>
          </div>
          <div className=''>
            <HeaderCstm />
          </div>
          <div className='gap-20'>
            <FooterCstm />
          </div>    
        </div>
        </div>
    </div>
  );
}
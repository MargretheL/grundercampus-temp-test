import React from 'react';
import BtnRound from './components/btnround';
import Location from './components/location';
import HeaderCstm from './components/headercstm';
import FooterCstm from './components/footercstm';

export default function Page() {
  return (
    <div className='bg-seashell'>
      <div className='bg-[url(/images/bg-small.png)] md:bg-[url(/images/bg-full.png)] bg-cover bg-center h-screen w-screen'>
        <div className="flex flex-col justify-between items-center pt-20 px-4 md:px-8  h-screen">
          <div className='flex flex-col gap-20 md:gap-15 xl:gap-20 items-center w-full '>
            <div className='flex flex-row w-full justify-between '>
              <div className='w-[15%] md:w-[5%] lg:w-[5%]'>  
                <img src='/images/logo-blue.png' alt='logo' />
              </div>
              <div className='flex flex-col items-end gap-2'>
                <BtnRound text='Kom på Kick-off 9.april!'/>
                <Location text='Solheimsgaten 7C'/>
              </div>
            </div>
            <div className=''>
              <HeaderCstm />
            </div>
          </div>
            <div className='justify-end pb-24 md:pb-8 xl:pb-8'>
              <FooterCstm />
            </div>    
          </div>
      </div>
    </div>
  );
}
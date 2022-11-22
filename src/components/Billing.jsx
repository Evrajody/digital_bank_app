import React from 'react'
import { apple, bill } from '../assets'
import styles, { layout } from '../style'


const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
          <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
          <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>

        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easly control your billing <br className="sm:block hidden" /> & invoicing </h2>
          <p className={`${styles.paragraph} max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum maiores ducimus quibusdam sint magni soluta quod aspernatur ex voluptatibus reprehenderit necessitatibus quae, ipsa autem eos nobis, provident vel dolorem.</p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="app_store" className='w-[128px] h-[42px] object-contain cursor-pointer mr-5'  />
            <img src={apple} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer'  />
          </div>

        </div>

    </section>
  )
}

export default Billing
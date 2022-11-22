import React from 'react'
import styles, { layout } from '../style'
import { features } from '../constants'
import Button from './Button'


const FeaturesCard = ({icon, title, content, index}) => {
  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index != features.length -1 ? 'mb-6' : 'mb-0'} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
           <img src={icon} alt="icon" className='w-[50px] h-[50px] object-contain' />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'> {title} </h4>
          <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'> {content} </p>
        </div>
    </div>
  )
}
  

const Business = () => {
  return (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              You do the Business, 
              <br className="sm:block hidden" /> 
              w'll handel the money. 
            </h2>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias esse at molestias, quas nulla quibusdam voluptatum id perspiciatis nihil officiis similique repellat minus? Consequatur ratione voluptatem nobis non perspiciatis?
            </p>

            <Button styles="mt-10"/>
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {
            features.map((feature, index) => (
              <FeaturesCard key={feature.id} {...feature} index={index} />
            ))
          }
        </div>

    </section>
  )
}

export default Business
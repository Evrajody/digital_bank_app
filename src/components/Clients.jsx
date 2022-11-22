import React from 'react'
import { clients } from '../constants'
import styles, { layout } from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {
          clients.map((client, index) => (
            <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
              <img src={client.logo} className='sm:w-[192px] h-[100px] object-contain' alt="client" />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Clients
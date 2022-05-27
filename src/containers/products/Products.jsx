import React from 'react';
import { Feature } from '../../components';
import './products.css';

const Products = () => {
  return (
    <div className='gpt3__products section__margin' id='products'>
      <div className='gpt3__products-heading'>
        <h1 className='gradient-text'>We help web³ communities vibe with their collections</h1>
      </div>
      <div className='gpt3__products-feature'>
        <Feature title="vibeIntel" text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
        <Feature title="vibeAlerts" text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
        <Feature title="vibeWars" text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
        <Feature title="vibeDAO" text="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est." />
      </div>
    </div>
  )
}

export default Products
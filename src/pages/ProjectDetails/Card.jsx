import React from 'react'
import './Card.css'
export default function Card() {
  return (
<>
<section className='Page'>
    <h2 class="tx">Project Details </h2>

    <div class="Card" >
        <div class="Container">
           <h4 class="text1"> <b> PROJECT ID :1</b></h4>
           <a href="/ProjectDetails.js">
           <p>KNOW MORE</p>
           </a>
        </div>
    </div>

    <div class="Card1" >
        <div class="Container1">
           <h4> <b> PROJECT ID :1</b></h4>
           <p>KNOW MORE</p>
        </div>
    </div>

    <div class="Card2" >
        <div class="Container2">
           <h4> <b> PROJECT ID :1</b></h4>
           <p>KNOW MORE</p>
        </div>
    </div>
</section>
</>
  )
}

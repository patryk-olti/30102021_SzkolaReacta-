import React, { useEffect, useRef } from 'react';

import 'typeface-roboto';
import '../styles/styles.scss';

import { gsap } from 'gsap';

const Home = () => {

    const dotRef = useRef();
    const tl = gsap.timeline();

    useEffect( () => {
        tl.set(dotRef.current, {
            scale: 0.1
        })       
        .to(dotRef.current, {
            scale: 3,
            duration: 1,
            ease: 'bounce'
        })
        .to(dotRef.current, {
            scale: 40,
            duration: 2
        })
    }, [])


    return(
        <div className='container'>
            <div className='background'></div>
            <div ref={dotRef} className='dot'></div>
            <div className='text'> What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
        </div>
    )
}

export default Home;
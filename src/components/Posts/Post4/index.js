import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

import Kingdom from './images/kingdom.jpg'
import Hearts from './images/hearts.jpg'

export function Post4() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src={Kingdom} />

                    <p>kingdomhearts</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src={Hearts}/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><FiHeart  /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>137 mil curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>kingdomhearts</span> We just announced Kingdom Hearts IV. 
                    </p>
                    <p className='hashtag'>#KH20th</p>
                    <p>Watch the new trailers on the <a href='https://www.youtube.com/watch?v=j2DSEkYFRh8&t=245s'>Kingdom Hearts</a> YouTube channel.</p>
                    
                

                    <p className='comments'>Ver todos os 2 mil comentários</p>

                </div>

                <div className="time-post" >
                    <time>10 de abril</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
        </>

    )
}
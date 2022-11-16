import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

import Mirella from './images/mirella3x4.jpg'
import Littles from './images/littles.jpg'

export function Post2() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src={Mirella} />

                    <p>mirellalvess</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src={Littles}/>
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
                    <span>517 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>mirellalvess</span> The littles! 💙
                    </p>
                

                    <p className='comments'>Ver todos os 44 comentários</p>

                    <p><span>crisouzath</span> amo esses!</p>

                </div>

                <div className="time-post" >
                    <time>9 de setembro</time>
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
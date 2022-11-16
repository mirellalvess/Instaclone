import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

import BTS from './images/bts.jpg'
import Meninos from './images/meninos.jpg'

export function Post3() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src={BTS} />

                    <p>bts.bighitofficial</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src={Meninos}/>
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
                    <span>968 mil curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>bts.bighitofficial</span> [#오늘의방탄] 변화는 많았지만 변함은 없는 우리🥰 오랜만에 하는 함성 공연이라니🥺 너무 보고 싶었고, 오늘 너무 즐거웠어요 아미! 보라해💜
                    </p>

                    <p className='hashtag'>#BTS #방탄소년단 #BTSARMY  #YetToComeInBUSAN #보라해</p>
                

                    <p className='comments'>Ver todos os 30 mil comentários</p>


                </div>

                <div className="time-post" >
                    <time>15 de outubro</time>
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
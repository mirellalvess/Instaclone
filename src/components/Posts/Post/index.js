import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

import Proa from './images/proa.png'
import Proaprofissao from './images/proaprofissao.jpg'

export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src={Proa} />

                    <p>instituto.proa</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src={Proaprofissao}/>
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
                    <span>612 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>instituto.proa</span> 😱 Quer estudar e trabalhar com programação? Essa é a sua oportunidade! 👾💻 Inscrições abertas para o curso de programação do PROA.🤓 Você pode contar com auxílio-transporte, notebook e uniforme, tudinho para você se dedicar ao curso sem problemas. O PROPROFISSÃO também apoia no desenvolvimento comportamental e cultural do aluno.
                    </p>
                    <p>
                        💙 Vagas limitadas! Inscreva-se agora no <a href='https://www.proa.org.br/proprofissao-estados/'>link</a>
                    </p>
                    <p className='hashtag'>#CursoDeTecnologia #Tecnologia#Programação #CursoDeProgramação #ProgramaçãoJava</p>
                </div>
                
                    <p className='comments'>Ver todos os 500 comentários</p>


                <div className="time-post" >
                    <time>6 de setembro</time>
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
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

type ChatMessage = {
    time: string,
    message : string,
    author : string,
    profileurl: string,
    dirRight : boolean 
}
  
export function ChatInput({chat, setChat }:{ chat : ChatMessage[], setChat : Dispatch<SetStateAction<ChatMessage[]>> }){
    const [tmp, setTmp] =  useState("")
    return (
        <div className='relative'>
            <div className='left-9 w-full p-2 bg-white items-center border-t'>
            <input type='text' className='flex-1 rounded-full border px-4 py-2 text-sm w-[73%]' onChange={(e)=>{setTmp(e.target.value)}} value={tmp}></input>
            <button className="ml-2 bg-yellow-300 text-sm px-4 py-2 rounded-full" onClick={()=>{setChat([...chat, {time:"오전 11:33",message:tmp, author:"김대건",profileurl:"", dirRight:true}]); setTmp("");}}>보내기</button>
            </div>
        </div>
        
    )
    
}
export function ChatRecommendatation({recommended, setRecommended}:{recommended : Array<string>, setRecommended : Dispatch<SetStateAction<string[]>>}) {
  
  const [index, setIndex] = useState(0)
  useEffect(()=>{ 
  },[index])
  const next = () => {setIndex((index+1)%recommended.length); console.log(recommended.length)}
  const prev = () => setIndex((index-1 + recommended.length)%recommended.length)


  const [tmp, setTmp] =  useState("")
  const [isLoading, setIsLoading] = useState(false)
    const tunnedRecommended = [
        "일단 작게라도 만들어봐. 생각만 하다 보면 끝도 없어.",
        "지금 고민하는 거 자체가 되게 중요한 데이터야",
        "처음 아이디어랑 다르게 가도 전혀 이상한 거 아니야.",
    ]
    const convertreCommend = () =>{
        setIsLoading(true)
        setTimeout(() => {
            if(tmp.includes("아이디어")){
                setRecommended([
                    "일단 작게라도 만들어봐. 생각만 하다 보면 끝도 없어.",
                    "지금 고민하는 거 자체가 되게 중요한 데이터야",
                    "처음 아이디어랑 다르게 가도 전혀 이상한 거 아니야.",
                ])
            }
            else if(tmp.includes("연애")){
                setRecommended([
                    "말보다 마음을 먼저 들어봐",
                    "문제가 생기는 게 문제가 아니야. 같이 풀어갈 수 있느냐가 중요해",
                    "사랑받고 싶다면, 네가 너 자신부터 챙겨야 해"
                ])
            }
        setIsLoading(false)
        }, 600);
    }


  return (
    <>
    <div className="w-full h-[127px] bg-white rounded-t-2xl shadow-inner flex items-center justify-between">
      <button onClick={prev}>◀</button>
      {isLoading ? (<img src='Filled fading balls.gif' className='w-10 h-10' alt='loading...' />) : 
        (<div className="flex-1 text-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{opacity:0, x:20}}
                animate={{opacity:1, x:0}}
                exit={{opacity:0, x:-20}}
                transition={{duration : 0.3}}
                className="text-gray-700 text-mm px-4">
                  {recommended[index]}
                </motion.div>
            </AnimatePresence>
          </div>)}
      <button onClick={next}>▶</button>
    </div>
    <div className='relative'>
      <div className='left-9 w-full p-2 bg-white items-center border-t'>
        <input type='text' className='flex-1 rounded-full border px-4 py-2 text-sm w-[73%]' onChange={(e)=>{setTmp(e.target.value)}} value={tmp}></input>
        <button className="ml-2 bg-yellow-300 text-sm px-4 py-2 rounded-full" onClick={convertreCommend}>보내기</button>
      </div>
    </div>
    </>  
  )

}

export function ChatActionToggle(){
    const [open, setOpen] = useState(false)
    return (
        <div className='relative'>
            <button onClick={() => setOpen(!open)}
            className='absolute bottom-20 right-4 bg-white text-white w-10 h-10 rounded-full shadow-lg z-50'>
                ➕
            </button>
            {/* 토글된 액션 박스 */}
            {open && (
              <div className="absolute bottom-32 right-4 bg-white shadow-xl rounded-xl py-2 px-4 w-[200px] space-y-2 z-40">
                <button className="w-full text-left hover:bg-gray-100 p-2 rounded"> 카카오톡 추가</button>
                <button className="w-full text-left hover:bg-gray-100 p-2 rounded"> 인스타그램 추가</button>
                <button className="w-full text-left hover:bg-gray-100 p-2 rounded"> 트위터 추가</button>
              </div>
            )}
        </div>
    )
}


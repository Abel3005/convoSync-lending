
import { useEffect, useRef } from "react";
import React, { Dispatch, SetStateAction, useState } from 'react'
import { LanBalloon } from "./balloon";
import { ChatActionToggle, ChatInput, ChatRecommendatation } from "./chat-room";
import { AppBar } from "./ui/appBar";
type ChatMessage = {
  time: string,
  message : string,
  author : string,
  profileurl: string,
  dirRight : boolean 
}

export function IphoneFrame({children}: {children : React.ReactNode}){
    
    return (
      <div className="relative w-[393px] h-[852px] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-8 border-black">
        <div className="absolute top-0 left-1/3 bg-black w-[130px] h-[30px] rounded-b-xl z-10"></div>
        <div className="relative w-full h-full bg-blue-100 overflow-y-auto" >
            {children}
        <div />
        </div >
      </div>  
    );

}



export function IphoneChatFrameV2(){
  const ref = useRef<HTMLDivElement>(null)

  type _Message = {
  time: string,
  message : string,
  author : string,
  profileurl: string,
  dirRight : boolean 
};

  const [msgs, setMsgs] = useState<_Message[]>([
      {
        time:"오전 10:31",
        message: "영민 오늘 피곤해 보이는데 괜춚?",
        author: "김대건",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        dirRight: true
      },
      {
        time: "오전 10:31",
        message : "똑같은데",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        author: "김대건",
        dirRight : false
      },
      {
        time : "오전 10:31",
        message: "흠,, 그렇고만?",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        author : "김대건",
        dirRight : true
      },
      {
        time: "오전 10:32",
        message: "좋지는 않고 그냥 그럼",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        author: "김대건",
        dirRight: false
    
      },
      {
        time: "오전 10:32",
        message: "그건 나도 마찬가지임",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        author : "김대건",
        dirRight : true
      },
      {
        time: "오전 10:32",
        message:"그 생각한 거 있음?",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        author: "김대건",
        dirRight : false
    
      },
      {
        time: "오전 10:33",
        message: "아직 별 다른 것은 떠오르지 않네",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        author : "김대건",
        dirRight : true
      },
      {
        time: "오전 10:33",
        message:"흠,,",
        author: "김대건",
        profileurl : "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800",
        dirRight: false 
      }
    ])


  
  useEffect(() =>{
    const el = ref.current;
    if (el){
      el.scrollTop = el.scrollHeight;
    }
  }, [msgs])


  const [recommended, setRecommended] = useState([
    "오늘 기분은 어때요?",
    "아침에 일어난 기분을 말로 표현해봐요.",
    "지금 이 순간 하고 싶은 말이 있다면?",
  ])

  const OverPlus = () =>{
    return (
      <div className="absolute left-[370px] top-[700px] ">
        <ChatActionToggle />
      </div>
    )
  }


  return (
    <div className="relative w-[393px] h-[852px] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-8 border-black">
      <div className="relative w-full h-full bg-blue-100" >
          <OverPlus />
          <AppBar title="ConvSync" counter="김대건"/>
          <div className='h-[20px]'></div>
            <div className='flex flex-col w-full h-[575px] ml-auto' >
              <div ref={ref} className="flex-1 space-y-2 overflow-y-auto scrollbar-hide">
                {msgs.map((item, idx)=>(
                <div key={idx} className='flex flex-col gap-6 px-2'>
                  <LanBalloon time={item.time} words={item.message} author={item.author} profileurl={item.profileurl} dirRight={item.dirRight} />
                </div>
             ))}
            </div>
          </div>
        <ChatRecommendatation recommended={recommended} setRecommended={setRecommended}/>
      </div>
    </div>  
  );

}

// @deprecated
export function IphoneChatFrame({msgs, setMsgs }: {msgs : ChatMessage[], setMsgs : Dispatch<SetStateAction<ChatMessage[]>> }){
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() =>{
    const el = ref.current;
    if (el){
      el.scrollTop = el.scrollHeight;
    }
  }, [msgs])

  const [min_y, setMinY] = useState(-1)
  const [max_y, setMaxY] = useState(-1)
  
  const flipY = ({x} : {x : number}) =>{
    // Second
    if (max_y-min_y === 1){
        setMaxY(x+1)
    }
    // First
    else{
      setMinY(x)
      setMaxY(x+1)
    }
  }
  
  const RedOverlay = () => {
    if (min_y === -1 || max_y === -1){
      return (<div></div>)
    }

    const topPx = `${50+min_y * 50}px`;
    const heightPx = `${50+(max_y - min_y) * 50}px`;

    return (
      <div>
          <div className='absolute left-0 w-full z-50 pointer-events-none' style={{top : topPx, height: heightPx }}>
            <div className="bg-red-500 opacity-0"></div>
            <div className="absolute inset-0 border-[3px] border-black border-dashed"></div>
          </div>
      </div>
      
    )
  }
  return (
    <div className="relative w-[393px] h-[852px] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-8 border-black">
      <div className="absolute top-0 left-1/3 bg-black w-[130px] h-[30px] rounded-b-xl z-10"></div>
        <div className="relative w-full h-full bg-blue-100" >
          <div className='h-[50px]'></div>
          <RedOverlay />
            <div className='flex flex-col w-full h-[600px] ml-auto' >
              <div ref={ref} className="flex-1 space-y-2 overflow-y-auto scrollbar-hide">
                {msgs.map((item, idx)=>(
                <div key={idx} className='flex flex-col gap-6' onClick={()=>(flipY({x:idx}))}>
                  <LanBalloon time={item.time} words={item.message} author={item.author} profileurl={item.profileurl} dirRight={item.dirRight} />
                </div>
             ))}
            </div>
          </div>
        <ChatInput chat={msgs} setChat={setMsgs}/>
        <div className="w-full bg-white h-[140px]">
        </div>
      </div>
    </div>  
  );

}

function DirectoryImage({width, height, txt, isOpen, onHover, onLeave} : 
    {width: number , 
    height : number, 
    txt: string ,
    isOpen : boolean
    onHover : () => void
    onLeave : () => void}){
  if(isOpen){  
    return(
      <div className="relative">
        <div className={`flex l-[10px] w-[${width}] bg-gray-100`}>
          <img src='file_close.png' width={width} height={height} style={{left : 1}} onMouseLeave={onLeave} />  
          <div className="flex text-[20px] font-semibold items-center justify-center">
            {txt}
          </div>
        </div>
      </div> 
    )
  }
  else{
    return (
      <div className="relative l-[20px]">
        <img src='file_open.png' width={width} height={height} style={{left : 5}}  onMouseEnter={onHover} />
      </div>
    )
  }
}

export default function HistoryView({setIndex} : {setIndex : Dispatch<SetStateAction<number>>}) {

  const [modalOpen, setModalOpen] = useState(false)

  const historyData = [
    {
      label: "김대건",
      records: [
        { time: "마지막 대화 시간", action: "2025년 5월 10일 10:45AM" },
        { time: "메인 대화 주제", action: "고민 상담" },
      ],
    },
    {
      label: "대지호",
      records: [
        { time: "마지막 대화 시간", action: "2025년 5월 10일 11:45AM" },
        { time: "메인 대화 주제", action: "인디밴드" },
      ],
    },
    {
      label: "오우택 멘토님",
      records: [
        { time: "마지막 대화 시간", action: "2025년 5월 10일 09:15AM" },
        { time: "메인 대화 주제", action: "아이디어 회의" },
      ],
    },
    {
      label: "백야팀 단톡방",
      records: [
        { time: "마지막 대화 시간", action: "2025년 5월 11일 01:35AM" },
        { time: "메인 대화 주제", action: "아이디어 회의" },
      ],
    },
  ];

  return (
    <div className="relative w-[393px] h-[852px] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-8 border-black">
      <div className="absolute top-0 left-1/3 bg-black w-[130px] h-[30px] rounded-b-xl z-10"></div>
        <div className="relative w-full h-full bg-blue-100 overflow-y-auto" >
          <div className="w-full h-full bg-blue-100 p-6 overflow-y-auto">
            <div className="h-[20px]" />
            <div className="flex flex-row items-center justify-between mb-5">
              <h1 className="text-3xl font-bold mb-6">History</h1>
              <button className="text-2xl text-gray-600">➕</button>
            </div>
      {historyData.map((group, idx) => (
        <button key={idx} className="w-full text-left rounded-xl shadow-sm border border-gray-200 p-4 mb-4 hover:shadow-md transition" onClick={()=>setIndex(1)}>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{group.label}</h2>
          <ul className="space-y-2">
            {group.records.map((record, rIdx) => (
              <li key={rIdx} className="flex justify-between text-sm text-gray-700">
                <span className="text-gray-500">{record.time}</span>
                <span>{record.action}</span>
              </li>
            ))}
          </ul>
        </button>
      ))}
    </div>
      </div >
    </div>  
  );
}
export function IphoneWithfile(){
  const [openIdx, setOpenIdx] = useState<number>(-1)
  const dirList = [
    {txt : "김대건과의 대화"},
    {txt : "대지호와의 대화"},
    {txt : "김대건과의 대화"},
    {txt : "김동현과의 대화"},
    {txt : "정동영과의 대화"},
    {txt : "배성민과의 대화"},
    {txt : "강기호와의 대화"},
    {txt : "사람1과의 대화"},
  ]
  return (
    <div className="relative w-[393px] h-[852px] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-8 border-black">
      <div className="absolute top-0 left-1/3 bg-black w-[130px] h-[30px] rounded-b-xl z-10"></div>
      <div className="relative w-full h-full bg-blue-100 overflow-y-auto" >
        <div className='flex flex-col gap-[10px]'>
          <div className="h-[50px]" />
          {dirList.map((item,idx)=>(
            <DirectoryImage key={idx} width={60} height={60} txt={item.txt} onHover={()=>setOpenIdx(idx)} onLeave={()=>setOpenIdx(-1)} isOpen={openIdx == idx}/>
          ))}
        </div>
      </div >
    </div>  
  );
}

export function MiniIphoneFrame({children}: {children : React.ReactNode}){

    return (
      <div className="relative w-[193px] h-[352px] rounded-[2.5rem] bg-black shadow-2xl overflow-hidden border-8 border-black">
        <div className="absolute top-0 left-1/3 bg-black w-[60px] h-[5px] rounded-b-xl z-10"></div>
        <div className="relative w-full h-full bg-white overflow-y-auto" >
            {children}
        <div />
        </div >
      </div>  
    );

}
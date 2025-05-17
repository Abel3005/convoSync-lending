
export function LanBalloon({time, words, author ,profileurl, dirRight} : { time: string, words: string, author:string, profileurl : string, dirRight : boolean}){
    if (dirRight){
        return (
            <div className='flex flex-row items-end gap-[1px] self-end'>            
                <div className='flex-end text-[0.625rem] test-gray-400 ml-2'>{time}</div>
                <div className='bg-yellow-200 rounded-xl p-2 text-sm max-w-[80%]'>{words}</div>
            </div>
        )
    }
    else{
        return (
            <div className='flex flex-row items-start  gap-[2px] self-start'>
                <img src={profileurl} alt="profile" className="w-8 h-8 rounded-full object-cover" />
                <div className="flex flex-col gap-2">
                    <div className="text-[0.625rem] w-10">{author}</div>
                    <div className='flex flex- items-end  gap-[1px]'>
                        <div className='bg-white rounded-xl p-2 text-sm max-w-[80%]'>{words}</div>
                        <div className='flex-end justify-end text-[0.625rem] test-gray-400 ml-1'>{time}</div>
                    </div>
                </div>
            </div>
    )
    }
}
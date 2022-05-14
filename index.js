// code your solution here
function superbowlWin(record){
    if(record.find(dub => dub.result === "W")){
        let win = record.find(dub => dub.result === "W")
        return win.year
    }
    
}
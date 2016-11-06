function(context, args)
{
    //alicebot.casino 'player'

    var a = #s.scripts.lib()
    var ret = ""

    var lastRunMS = a.get_date_utcsecs(), lastRunCost = 0
    for(var x = 0; x < 200; x++){
        ret = ret + #s.alicebot.casino({action : "play", game : "simpleslot", cmd : "spin"}) + "\n"
        
        lastRunCost = a.get_date_utcsecs() - lastRunMS
        lastRunMS = a.get_date_utcsecs()
        if(!a.can_continue_execution(lastRunCost+50)){
            break;
        }

    }

    ret = ret.match(/`L\+``A[0-9]+``TABC`/g);
    ret = ret + "\n" +#s.alicebot.account({action : "standings"})
    return ret

}

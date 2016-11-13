function(context, args)//s:#s.corp.name,args:<argsobj>
{
	var s = args.s;
	var args = args.args;
	var corrFix =(s,args) =>{
		var result = s.call(args);
		var res2 = s.call(args);
		var res3 = s.call(args);
		var rType = typeof result;
		var ñ = (a) => (a+'').replace(/`\w\S?`/g,'~');
		var repl = (searchIn,replaceWith,backup) =>{
			let search = searchIn;
			let rg = (/~/);
			while(search.match(/~/g)){
				let match = rg.exec(search);
				let replace = ñ(replaceWith);
				if(replace[match.index] == '~') replace = ñ(backup);
				search = search.replace(/~/,replace[match.index]);
			}
			return search;
		}

		if(rType == "object"){
			for(let i = 0;i<result.length;i++){
				result[i]= ñ(result[i]);
			}
			for (let i = 0;i<result.length;i++){
				result[i] = repl(result[i],res2[i],res3[i])
			}
			return result;
		} else if(rType == "string"){
			result = ñ(result);
			result = repl(result,res2,res3)
			return result;
		}
	}

	return corrFix(s,args);
}

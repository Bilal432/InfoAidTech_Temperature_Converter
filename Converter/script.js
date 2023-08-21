const calculate = () =>{
    const num = document.getElementById("inp").value;
    const sel = document.getElementById("tem-div");
    const val = sel.options[sel.selectedIndex].value;
    console.log(num);
    
    function celToFah(c){
        let resf = ((c * 9/5) + 32);
        if(!Number.isInteger(resf)){
            resf = resf.toFixed(2);
        }
        return resf;
    }
    function fahToCel(f){
        let resc = ((f - 32) * 5/9);
        if (!Number.isInteger(resc)) {
          resc = resc.toFixed(2);
        }
        return resc;
    }

    let = cal;
    
    if(val == "cel"){
        cal = celToFah(num);
        document.getElementById("res").value = cal;
    }
    else{
        cal = fahToCel(num);
        document.getElementById("res").value = cal;
    }
}
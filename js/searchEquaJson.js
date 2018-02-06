$("#btnSearch").click(function () {
    console.log("btnSearch");
    var searchType = $("#sType").val();
    console.log(searchType);

    var eHtml = ' ';
    for (var i = 0; i < edata.length; i++) {
        if (edata[i].etype == searchType) {
            for (var j = 0; j < edata[i].equation.length; j++) {
                if (i == 0)
                    eHtml += '<tr class="table-primary">';
                else
                    eHtml += '<tr>';
                eHtml += '<th scope="row">' + edata[i].eid + '</th>'
                eHtml += '<td>' + edata[i].etype + '</td>'
                eHtml += '<td>' + edata[i].ename + '</td>'

                eHtml += '<td><strong>' + edata[i].equation[j] + '</strong></td>'

                eHtml += '<td>' + edata[i].desc + '</td>'
                eHtml += '<tr>'
            }
        }

    }
    $("#lookuptable").html(eHtml);
})

$("#btnSearchDiff").click(function () {
    console.log("btnSearchDiff");
    var searchDiff = $("#sDiff").val();
    var equivalCheck = $("input[type='checkbox']").is(':checked');

    console.log(searchDiff);
    console.log(equivalCheck);

    //equivallence property
    if(equivalCheck){
        //for of loop
        /*
        for(var value of equivalSet){
            console.log(value);

        }*/
        console.log(equivalSet[0].x);
        
        var regx = "/"+equivalSet[0].x+"/g"; 
        var regy = "/"+equivalSet[0].y+"/g"; 
        var regz = "/"+equivalSet[0].z+"/g"; 

       var equivalDiff=searchDiff.replace(eval(regx),"x");
       equivalDiff=equivalDiff.replace(eval(regy),"y");
       equivalDiff=equivalDiff.replace(eval(regz),"z");
       console.log(equivalDiff);
       searchDiff = equivalDiff;
    }
    var eHtml = ' ';
    for (var i = 0; i < edata.length; i++) {
        for (var j = 0; j < edata[i].equation.length; j++) {
            var indexflag = edata[i].equation[j].indexOf(searchDiff);
            if (indexflag != -1) {
                if (i == 0)
                    eHtml += '<tr class="table-primary">';
                else
                    eHtml += '<tr>';
                eHtml += '<th scope="row">' + edata[i].eid + '</th>'
                eHtml += '<td>' + edata[i].etype + '</td>'
                eHtml += '<td>' + edata[i].ename + '</td>'

                eHtml += '<td><strong>' + edata[i].equation[j] + '</strong></td>'

                eHtml += '<td>' + edata[i].desc + '</td>'
                eHtml += '<tr>'
            }
        }

    }
    $("#lookuptable").html(eHtml);
})
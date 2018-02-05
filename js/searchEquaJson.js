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
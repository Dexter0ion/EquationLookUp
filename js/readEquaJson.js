$("#btnOverview").click(function () {;
    var eHtml = ' ';
    for (var i = 0; i < edata.length; i++) {
        console.log(edata[i]);
        console.log(eHtml);
        if (i == 0)
            eHtml += '<tr class="table-primary">';
        else
            eHtml += '<tr>';

        eHtml += '<th scope="row">' + edata[i].eid + '</th>'
        eHtml += '<td>' + edata[i].etype + '</td>'
        eHtml += '<td>' + edata[i].ename + '</td>'
        eHtml += '<td><strong>' + edata[i].equation[0] + '</strong></td>'
        eHtml += '<td>' + edata[i].desc + '</td>'
        eHtml += '<tr>'
    }

    $("#indextbody").html(eHtml);
})



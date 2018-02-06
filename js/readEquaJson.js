$("#btnOverview").click(function () {
    
    var eHtml = ' ';

    for (var i = 1; i < edata.length; i++) {
        console.log(edata[i]);
        console.log(eHtml);

        if (i == 0)
            eHtml += '<tr class="table-primary">';
        else

            eHtml += '<tr>';

        eHtml += '<th scope="row">' + edata[i].eid + '</th>';
        eHtml += '<td>' + edata[i].etype + '</td>';
        eHtml += '<td>' + edata[i].ename + '</td>';
        eHtml += '<td>$$' + edata[i].equation[0][1] + '$$</td>';
        eHtml += '</td>';
        eHtml += '<td>' + edata[i].desc + '</td>'
        eHtml += '</tr>'

        console.log(edata[i].equation[0][1]);
    }

    $("#indextbody").html(eHtml);
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
})




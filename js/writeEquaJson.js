$("#btnSave").click(function () {
    console.log("btnSearch");
    var saveType = $("#sType").val();
    var saveName = $("#sName").val();
    var saveEqua = $("#sEqua").val();
    var saveDesc = $("#sDesc").val();

    var saveJSON = {
        "eid": edata.length+1,
        "etype": saveType,
        "ename": saveName,
        "equation": saveEqua,
        "desc": saveDesc
    }

    edata.push(saveJSON);
    alert("微分公式插入完成");
})
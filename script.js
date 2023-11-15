function select_container(number){
    var calculating_zone = document.querySelector("#calculating-zone");
    if(number == 1){
        calculating_zone.innerHTML=`
        <table id='container1-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' id='diameter-base'></td>
        </tr>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางลำตัว (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' id='diameter-body'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' id='height'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(1);'>Calculate</button></td>
        </tr>
        <table>
        `;
    }
}

function calculate(number){
    if(number == 1){
        var diameter_base = parseFloat(document.querySelector("#diameter-base").value);
        var diameter_body = parseFloat(document.querySelector("#diameter-body").value);
        var height = parseFloat(document.querySelector("#height").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";
        
        if(isNaN(diameter_base+diameter_body+height)){
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            var result = (Math.PI * (height*(diameter_body/2)) + Math.pow((Math.PI*height*(diameter_body-diameter_base)/4),2))*0.016;
            alert_zone.innerHTML = (result.toFixed(3))+" ลิตร";
        }
    }
}
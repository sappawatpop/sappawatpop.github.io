function select_container(number){
    var calculating_zone = document.querySelector("#calculating-zone");
    if(number == 1){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container1-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-base'></td>
        </tr>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางลำตัว (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-body'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label id='sand-amount'>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input id='sand-amount' type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(1);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 2){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container2-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-base'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
        <td><label id='sand-amount'>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
        <td><input id='sand-amount' type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(2);'>คำนวณ</button></td>
        </tr>
        <table>
        `;

    } else if(number == 3){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container2-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางใหญ่ (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-big'></td>
        </tr>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางเล็ก (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-small'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
        <td><label id='sand-amount'>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
        <td><input id='sand-amount' type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(3);'>คำนวณ</button></td>
        </tr>
        <table>
        `;

    }
}

function calculate(number){
    var result;
    if(number == 1){
        var diameter_base = parseFloat(document.querySelector(".diameter-base").value);
        var diameter_body = parseFloat(document.querySelector(".diameter-body").value);
        var height = parseFloat(document.querySelector(".height").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";

        if(isNaN(diameter_base+diameter_body+height)){
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            result = (Math.PI * (height*(diameter_body/2)) + Math.pow((Math.PI*height*(diameter_body-diameter_base)/4),2))*0.016;
            
            var string = "ปริมาตรน้ำสูงสุดในภาชนะเท่ากับ "+result.toFixed(1)+" ลิตร"+"<br>";
            if(result <= 50){
                string+="ต้องใช้ทรายจำนวน "+0.25+" ถุง";
            } else{
                result = result/200;
                result = result.toFixed(1);
                string+="ต้องใช้ทรายจำนวน "+result+" ถุง";
            }
            alert_zone.innerHTML = string;
        }
    } else if(number == 2){
        var diameter_base = parseFloat(document.querySelector(".diameter-base").value);
        var height = parseFloat(document.querySelector(".height").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";
        if(isNaN(diameter_base+height)){
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            result = Math.PI*(Math.pow(diameter_base/2,2))*height*0.016;
            
            var string = "ปริมาตรน้ำสูงสุดในภาชนะเท่ากับ "+result.toFixed(1)+" ลิตร"+"<br>";
            if(result <= 50){
                string+="ต้องใช้ทรายจำนวน "+0.25+" ถุง";
            } else{
                result = result/200;
                result = result.toFixed(1);
                string+="ต้องใช้ทรายจำนวน "+result+" ถุง";
            }
            alert_zone.innerHTML = string;
        }

    } else if(number == 3){
        var diameter_big = parseFloat(document.querySelector(".diameter-big").value);
        var diameter_small = parseFloat(document.querySelector(".diameter-small").value);
        var height = parseFloat(document.querySelector(".height").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";

        if(isNaN(diameter_big+diameter_small+height)){
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            result = Math.PI*(Math.pow(diameter_big/2,2)+(diameter_big*diameter_small/4)+Math.pow(diameter_small/2,2))*height/3*0.016;
            
            var string = "ปริมาตรน้ำสูงสุดในภาชนะเท่ากับ "+result.toFixed(1)+" ลิตร"+"<br>";
            if(result <= 50){
                string+="ต้องใช้ทรายจำนวน "+0.25+" ถุง";
            } else{
                result = result/200;
                result = result.toFixed(1);
                string+="ต้องใช้ทรายจำนวน "+result+" ถุง";
            }
            alert_zone.innerHTML = string;
        }
    }
}
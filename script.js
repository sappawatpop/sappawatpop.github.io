function select_container(number){
    var calculating_zone = document.querySelector("#calculating-zone");
    if(number == 1){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container1-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางส่วนที่ใหญ่สุด (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-body'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label class='sand-margin'>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-margin sand-amount' type='number' step='0.1' min='0.1'></td>
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
        <td><label class='sand-margin'>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
        <td><input class='sand-margin sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(2);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 3 || 4){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container3-table'>
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
        <td><label class='sand-margin'>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
        <td><input class='sand-margin sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(3);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 5){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container5-table'>
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
        <td><label class='sand-margin'>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
        <td><input class='sand-margin sand-amount' type='number' step='0.1' min='0.1'></td>
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
        var diameter_body = parseFloat(document.querySelector(".diameter-body").value);
        var height = parseFloat(document.querySelector(".height").value);
        var sand_amount = parseFloat(document.querySelector(".sand-amount").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";

        if(isNaN(diameter_body+height+sand_amount)){
            alert_zone.style.color = 'red';
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            alert_zone.style.color = 'black';
            result = (4/3)*Math.PI*(height/2)*Math.pow(diameter_body/2,2)*0.016;
            var string = "ปริมาตรน้ำสูงสุดในภาชนะเท่ากับ "+result.toFixed(1)+" ลิตร"+"<br>";
            if(result <= 10){
                string+="ต้องใช้ทรายจำนวน "+1+" ถุง";
            } else{
                result = result/(10*sand_amount);
                result = result.toFixed(1);
                string+="ต้องใช้ทรายจำนวน "+Math.ceil(result)+" ถุง";
            }
            alert_zone.innerHTML = string;
        }
    } else if(number == 2){
        var diameter_base = parseFloat(document.querySelector(".diameter-base").value);
        var height = parseFloat(document.querySelector(".height").value);
        var sand_amount = parseFloat(document.querySelector(".sand-amount").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";
        if(isNaN(diameter_base+height+sand_amount)){
            alert_zone.style.color = 'red';
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            alert_zone.style.color = 'black';
            result = Math.PI*(Math.pow(diameter_base/2,2))*height*0.016;
            
            var string = "ปริมาตรน้ำสูงสุดในภาชนะเท่ากับ "+result.toFixed(1)+" ลิตร"+"<br>";
            if(result <= 10){
                string+="ต้องใช้ทรายจำนวน "+1+" ถุง";
            } else{
                result = result/(10*sand_amount);
                result = result.toFixed(1);
                string+="ต้องใช้ทรายจำนวน "+Math.ceil(result)+" ถุง";
            }
            alert_zone.innerHTML = string;
        }

    } else if(number == 3){
        var diameter_big = parseFloat(document.querySelector(".diameter-big").value);
        var diameter_small = parseFloat(document.querySelector(".diameter-small").value);
        var height = parseFloat(document.querySelector(".height").value);
        var sand_amount = parseFloat(document.querySelector(".sand-amount").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";

        if(isNaN(diameter_big+diameter_small+height+sand_amount)){
            alert_zone.style.color = 'red';
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            alert_zone.style.color = 'black';
            result = Math.PI*(Math.pow(diameter_big/2,2)+(diameter_big*diameter_small/4)+Math.pow(diameter_small/2,2))*height/3*0.016;
            
            var string = "ปริมาตรน้ำสูงสุดในภาชนะเท่ากับ "+result.toFixed(1)+" ลิตร"+"<br>";
            if(result <= 10){
                string+="ต้องใช้ทรายจำนวน "+1+" ถุง";
            } else{
                result = result/(10*sand_amount);
                result = result.toFixed(1);
                string+="ต้องใช้ทรายจำนวน "+Math.ceil(result)+" ถุง";
            }
            alert_zone.innerHTML = string;
        }
    }
}


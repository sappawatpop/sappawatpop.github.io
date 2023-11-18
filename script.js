function goToPage(number){
    if(number == 0){
        window.location.href = 'index.html';
    }else if(number == 2){
        window.location.href = 'calculator.html';
    }
}

function select_container(number){
    var calculating_zone = document.querySelector("#calculating-zone");
    var alert_zone = document.querySelector("#alert-zone");
    alert_zone.innerHTML = "";
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
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-amount' type='number' step='0.1' min='0.1'></td>
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
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(2);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 3){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container3-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-small'></td>
        </tr>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางปากขอบ (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-big'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(3);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 4){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container3-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-big'></td>
        </tr>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางปากขอบ (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-small'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-amount' type='number' step='0.1' min='0.1'></td>
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
            <td><label>เส้นผ่านศูนย์กลางฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-big'></td>
        </tr>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางขอบปาก (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter-small'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(5);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 6){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container6-table'>
        <tr>
            <td><label>เส้นผ่านศูนย์กลางขอบปาก (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='diameter'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(6);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 7){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container7-table'>
        <tr>
            <td><label>ความกว้างฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='base-width'></td>
        </tr>
        <tr>
            <td><label>ความยาวฐาน (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='base-length'></td>
        </tr>
        <tr>
            <td><label>ความกว้างปากขอบ (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='top-width'></td>
        </tr>
        <tr>
            <td><label>ความยาวปากขอบ (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='top-length'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(7);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else if(number == 8){
        calculating_zone.innerHTML=`
        <p class='calculate-desc info'>กรอกข้อมูลดังต่อไปนี้</p>
        <table id='container8-table'>
        <tr>
            <td><label>ความกว้าง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='width'></td>
        </tr>
        <tr>
            <td><label>ความยาว (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='length'></td>
        </tr>
        <tr>
            <td><label>ความสูง (นิ้ว)</label></td>
            <td><input type='number' step='0.1' min='0.1' class='height'></td>
        </tr>
        <tr>
            <td><label>ปริมาณทรายอะเบทใน 1 ถุง (กรัม)</label></td>
            <td><input class='sand-margin sand-amount' type='number' step='0.1' min='0.1'></td>
        </tr>
        <tr>
            <td colspan='2'><button class='calculate-button' onclick='calculate(8);'>คำนวณ</button></td>
        </tr>
        <table>
        `;
    } else {
        return 0;
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
            alert_zone.style.color = 'green';
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
            alert_zone.style.color = 'green';
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
            alert_zone.style.color = 'green';
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
    } else if(number == 5){
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
            alert_zone.style.color = 'green';
            result = (Math.PI*Math.pow(height,2)/3)*(3*(diameter_big/2)-height)-(Math.PI*Math.pow(diameter_small/2,2)/3)*(diameter_small/2)*0.016;
            
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
    } else if(number == 6){
        var diameter = parseFloat(document.querySelector(".diameter").value);
        var height = parseFloat(document.querySelector(".height").value);
        var sand_amount = parseFloat(document.querySelector(".sand-amount").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";

        if(isNaN(diameter+height+sand_amount)){
            alert_zone.style.color = 'red';
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            alert_zone.style.color = 'green';
            result = (Math.PI*height/6)*(3*Math.pow(diameter/2,3)+Math.pow(height,2))*0.016;
            
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
    } else if(number == 7){
        var base_width = parseFloat(document.querySelector(".base-width").value);
        var base_length = parseFloat(document.querySelector(".base-length").value);
        var top_width = parseFloat(document.querySelector(".top-width").value);
        var top_length = parseFloat(document.querySelector(".top-length").value);
        var height = parseFloat(document.querySelector(".height").value);
        var sand_amount = parseFloat(document.querySelector(".sand-amount").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";

        if(isNaN(base_width+base_length+top_width+top_length+height+sand_amount)){
            alert_zone.style.color = 'red';
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            alert_zone.style.color = 'green';
            result = ((top_width*base_length+top_length*base_width+2*(top_length*top_width+base_length*base_width))/6)*height*0.016;
            
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
    } else if(number == 8){
        var width = parseFloat(document.querySelector(".width").value);
        var length = parseFloat(document.querySelector(".length").value);
        var height = parseFloat(document.querySelector(".height").value);
        var sand_amount = parseFloat(document.querySelector(".sand-amount").value);
        var alert_zone = document.querySelector("#alert-zone");
        alert_zone.innerHTML = "";

        if(isNaN(width+length+height+sand_amount)){
            alert_zone.style.color = 'red';
            alert_zone.innerHTML = "กรุณากรอกข้อมูลให้ครบถ้วน";
        } else{
            alert_zone.style.color = 'green';
            result = width*length*height*0.016;
            
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
    } else {
        return 0;
    }
        
}


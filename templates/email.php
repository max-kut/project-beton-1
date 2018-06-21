<!DOCTYPE html>
<html lang='en'>
<head>
    <meta http-equiv='Content-Type' content='text/html; charset=UTF-8' />
    <style>
        h5, p {
            font: 400 17px/1.4 Calibri;
            padding: 0 0 7px;
            margin: 0 0 6px;
            border-bottom: 1px solid #ddd;
            max-width: 705px;
		}
        h5 {
			font-size: 21px;
			font-weight: 600;
        }
        p span {
            color:#999;
        }
        div {
            padding: 10px 0 0;
        }
    </style>
</head>
<body>
    <div>
        <h5><?php echo "{$date} ({$time})";?></h5>
        <p>
            <span>Телефон:</span> <?php echo $phone;?>
        </p>
    </div>
</body>
</html>
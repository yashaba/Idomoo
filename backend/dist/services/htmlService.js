"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlService = void 0;
class HtmlService {
    getLandingPage(data) {
        try {
            return `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generated Landing Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(to right, #1f4037, #99f2c8);
            color: #fff;
            text-align: center;
            padding: 50px;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 10px;
        }
        h2 {
            font-size: 1.5em;
            margin-bottom: 30px;
        }
        .idm-player {
            width: 80%;
            margin: 0 auto 20px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
        }
        .buttons {
            margin-top: 20px;
        }
        .buttons button {
            background: #ff6f61;
            color: #fff;
            border: none;
            padding: 15px 30px;
            font-size: 1em;
            margin: 10px;
            border-radius: 50px;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .buttons button:hover {
            background: #ff3b2f;
        }
    </style>
    <script type="text/javascript" src="https://player.idomoo.com/latest/main.js"></script>
</head>
<body>
    <h1>Hello ${data.firstName} ${data.lastName}!</h1>
    <h2>Here are your cool stats from last year!</h2>

    <div id="idm_player" class="idm-player"></div>
    
    <div class="buttons">
        <button class="idm-cta-btn1">Loved it</button>
        <button class="idm-cta-btn2">It cracked me down</button>
    </div>

    <script>
        var player_options = {
            interactive: true,
            size: "hd",
            src: "${data.url}",
            autoplay: true,
            cta_analytics: [
                ["idm-cta-btn1", "Loved it"],
                ["idm-cta-btn2", "It cracked me down"]
            ]
        };

        idmPlayerCreate(player_options, "idm_player");
    </script>
</body>
</html>
    `;
        }
        catch (error) {
            throw new Error('Error creating landing page');
        }
    }
    ;
}
exports.htmlService = new HtmlService();

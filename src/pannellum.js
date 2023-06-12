pannellum.viewer('panorama', {   
    "default": {
        "firstScene":  "entree",
        autoLoad : true,
        showControls: true,
        preview: "static/scene_1.JPG",
        "sceneFadeDuration": 1000,
        "compass":false
    },
    
    "scenes": {
        "entree": {
            "title": "Université d'Avignon",
            "type": "equirectangular",
            "panorama": "static/scene_1.JPG",
            "horizonRoll" : 3.6,
            "yaw": 168, 
            "hfov": 130,
            "pitch":10,
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 169,
                    "type": "scene",
                    "text": "Hall d'entrée",
                    "sceneId": "hall",
                },
                {
                    "pitch": -3.94,
                    "yaw": -8.01,
                    "type": "scene",
                    "text": "nouveau batiment",
                    "sceneId": "facade_nouveau_batiment",
                },
                {
                    "pitch": 0.41,
                    "yaw": -101.93,
                    "type": "info",
                    "text": "Sortie coté rempart",
                },
                {
                    "pitch": 0.55,
                    "yaw": 81.60,
                    "type": "info",
                    "text": "Sortie coté Centre ville",
                },
                {
                    "pitch": 10.03,
                    "yaw": -8.89,
                    "type": "info",
                    "text": "Bibliothéque universitaire",
                } 
            ]
        },

        "hall": {
            "title": "Hall d'entrée",
            "type": "equirectangular",
            "panorama": "/static/scene_2.JPG",
            "yaw": 125,
            "hfov": 120,
            "horizonRoll": -1,
            "hotSpots": [
                {
                    "pitch": -34.46,
                    "yaw": -5.56,
                    "type": "scene",
                    "text": "Extérieur",
                    "sceneId": "entree",
                }
            ]
            },
        
        "hall_2": {
            "title": "hall nouveau batiment",
            "type": "equirectangular",
            "panorama": "/static/scene_3.JPG",
            "horizonRoll": 5.2,
            "hfov": 120,
            "hotSpots": [
                {
                    "pitch": -5.25,
                    "yaw": 128.84,
                    "type": "info",
                    "text": "Cafétéria",
                },
                {
                    "pitch": -11.18,
                    "yaw": -176.97,
                    "type": "scene",
                    "sceneId": "facade_nouveau_batiment",
                }
            ]
            },

        "facade_nouveau_batiment": {
            "type": "equirectangular",
            "panorama": "/static/scene_4.JPG",
            "horizonRoll": 5.4,
            "hfov": 120,
            "yaw": 2,
            "pitch":15,
            "hotSpots": [
                {
                    "pitch": -12.14,
                    "yaw": -7.86,
                    "type": "scene",
                    "text": "Hall",
                    "sceneId": "hall_2",
                },
                {
                    "pitch": -4.98,
                    "yaw": -178.92,
                    "type": "scene",
                    "sceneId": "entree",
                },
                {
                    "pitch": 30.24,
                    "yaw": -57.82,
                    "type": "info",
                    "text": "Projet Inside Out",
                },
                {
                    "pitch": -0.36,
                    "yaw": -79.95,
                    "type": "info",
                    "text": "BDE",
                }
            ]
            },
                }
        }
    );

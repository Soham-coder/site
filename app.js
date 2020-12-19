//Initialising the bot and script
var botui = new BotUI('botui-app');
    
botui.message.add({
    content: 'Hello there' 
        }).then(function(){
        return botui.message.bot ({
        delay: 800,
        content: 'I am Soham Mondal, currently a senior Engineer @ SAMSUNG SEMICONDUCTOR INDIA R&D BANGALORE, INDIA.'
    });
}).then(function() {
    return botui.message.bot ({
    delay: 800,
    content: 'What is your name?'
    });
}).then(function() {
    botui.action.text({
        delay: 800,
    addMessage: false,
    action: {
       value: 'Put Your Name here',
      placeholder: 'Your Name'
    }
    }).then(function(res) {
    botui.message.add({
        delay: 200,
    content: 'Alright ' + res.value + ', Lets get started then.'
    });

}).then(function() {
    return botui.action.button ({
        delay: 800,
        action: [
            {
                text: 'okay, got it.',
                value: 'okay'
            },
            {
                text: 'How can I reach out to you?',
                value: 'reach_out'
            }
        ]
    });
}).then(function(res){
        if(res.value == 'reach_out')
        {
            return botui.message.add({
            loading:true,
            delay:2000,
            content: 'You can mail me at sohammondal39@gmail.com and if you\'re in Bangalore, we can talk about tech over a cup of tea.'
            });
        }
        else
        {
            return botui.message.add(
                {
                    delay: 1000,
                    content:'Great.'
                }
            );
        }
    }).then(function(){
        return botui.action.button({
            delay:1000,
            action:[
                {
                    text: 'Share your journey.',
                    value: 'SYJ'
                },
                {
                    text: 'Where have you worked before?',
                    value: 'WHYWB'
                },
                {
                    text: 'Share some of your skills',
                    value: 'SSOYS'
                }
            ]
        });
    }).then(function(res){
        if(res.value == 'SYJ')
        {
            return botui.message.add({
                delay: 500,
                content: 'I was born in Kolkata, and travelled to 7 different cities of India.\nI can easily adapt to new environments, and embrace change positively.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'After high school, I then joined Jadavpur University Kolkata, one of the good institute of india to study Electronics & Telecomm Engg. After that in 3rd year on_campus internship I got into SAMSUNG and now I am appointed as a SoC DESIGN & VERIFICATION engineer there.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'Irresepective of my field of Job I take interest in learning new technologies, be it python scripting, shell scripting, automation, web development or VIP development or studying design architecture specifications or hardware design and micro-architecture development.'
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: 'Where have you worked before?',
                                value: 'WHYWB'
                            },
                            {
                                text: 'Share some of your skills',
                                value: 'SSOYS'
                            }
                        ]
                    });
                })
            });
            });
        }
        else if(res.value=='WHYWB')
        {
            return botui.message.add({
                delay: 500,
                content: 'Along with my job, I keep doing some freelancing design.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Before this, I’ve worked as a Intern at SAMSUNG where I was responsible to build a driver logic in RTL which can communicate with a PHY and DDR4.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'I have also worked as a research associate at Medical Imaging and computing Labs, JU.'
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: 'Share your journey.',
                                value: 'SYJ'
                            },
                            {
                                text: 'Share some of your skills',
                                value: 'SSOYS'
                            }
                        ]
                    });
                })
            });
            });
        }
        else
        {
            return botui.message.add({
                delay: 500,
                content: 'I have hands-on experience with both conducting design and verification as well with Network-on-Chip interfaces, AMBA cadence Denali VIPs.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Proficient in Sketch, LaTeX, Adobe Illustrator, Adobe Indesign and Principle, Microsoft office tools.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'Comfortable with Python, HTML, CSS, Javascript, and Occasionally tinker with arduino and sensors or SoC boards like Raspberry Pi 3b+ to build interactive prototypes.'
                }).then(function(){
                    return botui.action.button({
                        delay:1000,
                        action:[
                            {
                                text: 'Share your journey.',
                                value: 'SYJ'
                            },
                            {
                                text: 'Where have you worked before?',
                                value: 'WHYWB'
                            }
                        ]
                    });
                })
            });
            }); 
        }
    }).then(function(res){
        if(res.value == 'SYJ')
        {
            return botui.message.add({
                delay: 500,
                content: 'I was born in Kolkata, and travelled to 7 different cities of India.\nI can easily adapt to new environments, and embrace change positively'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'After high school, I then joined Jadavpur University Kolkata, one of the good institute of india to study Electronics & Telecomm Engg. After that in 3rd year on_campus internship I got into SAMSUNG and now I am appointed as a SoC DESIGN & VERIFICATION engineer there.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'Irresepective of my field of Job I take interest in learning new technologies, be it python scripting, shell scripting, automation, web development or VIP development or studying design architecture specifications or hardware design and micro-architecture development.'
                })
            });
            });
        }
        else if(res.value=='WHYWB')
        {
            return botui.message.add({
                delay: 500,
                content: 'Along with my job, I keep doing some freelancing design.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Before this, I’ve worked as a Intern at SAMSUNG where I was responsible to build a driver logic in RTL which can communicate with a PHY and DDR4.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'I have also worked as a research associate at Medical Imaging and computing Labs, JU.'
                })
            });
            });
        }
        else
        {
            return botui.message.add({
                delay: 500,
                content: 'I have hands-on experience with both conducting design and verification as well with Network-on-Chip interfaces, AMBA cadence Denali VIPs.'
            }).then(function(){
                return botui.message.add({delay: 500,
                content: 'Proficient in Sketch, LaTeX, Adobe Illustrator, Adobe Indesign and Principle, Microsoft office tools.'
            }).then(function(){
                return botui.message.add({
                    delay: 500,
                    content: 'Comfortable with Python, HTML, CSS, Javascript, and Occasionally tinker with arduino and sensors or SoC boards like Raspberry Pi 3b+ to build interactive prototypes.'
                })
            });
            }); 
        }
    }).then(function(){
        return botui.action.button({
            delay:1000,
            action:[
                {
                    text: 'Wanna know some more?',
                    value: 'WKSM'
                },
                {
                    text: 'How can I reach out to you?',
                    value: 'reach_out'
                }
            ]
        }).then(function(res){
            if(res.value == 'WKSM')
            {
                return botui.message.add({
                    delay: 500,
                    content: 'You can check out my work at my [portfolio webiste](https://soham-coder.github.io/site/)'
                });
            }
            else
            {
                return botui.message.add({
                    delay: 500,
                    content: 'Feel free to drop me a mail at sohammondal39@gmail.com'
                })
            }
        })
    });
});

const chai = require('chai');
const assert = chai.assert;
const {LocaleLang} = require('../utils/enums');
const Translator = require('../components/translator.js');
const ts = new Translator()
suite('Unit Tests', () => {
    suite('Test static methods', ()=>{
        test('Test clean input text', ()=>{
            assert.strictEqual(
                Translator.cleanInput("At 12 i'll eat my First OrAnge."),
                "at 12 i'll eat my first orange."
            )
            
            assert.strictEqual(
                Translator.cleanInput("At 12:30 i'll eat my First OrAnge."),
                "at 12:30 i'll eat my first orange."
            )

            assert.strictEqual(
                Translator.cleanInput("12/05/2020 15:50:23.0255654 Hello World"),
                "12052020 15:50:23.0255654 hello world"
            )

            assert.strictEqual(
                Translator.cleanInput("23.0255654 Hello World"),
                "23.0255654 hello world"
            )
            assert.strictEqual(
                Translator.cleanInput("A2 [Hello] World?"),
                "a2 hello world"
            )
            assert.strictEqual(
                Translator.cleanInput("A.2 Hello (World)"),
                "a.2 hello world"
            )
            assert.strictEqual(
                Translator.cleanInput("A/2, Hello {World}"),
                "a2 hello world"
            )

            assert.strictEqual(
                Translator.cleanInput("àéèôïùàç"),
                "aeeoiuac"
            )
        })
    })

    
    suite('Translate to British', ()=>{
        test('Translate Mangoes are my favorite fruit. to British English', ()=>{
            assert.strictEqual(
                ts.translateToBritish("Mangoes are my favorite fruit."),
                "Mangoes are my favourite fruit."
            )
        })

        test('Translate I ate yogurt for breakfast. to British English', ()=>{
            assert.strictEqual(
                ts.translateToBritish("I ate yogurt for breakfast."),
                "I ate yoghurt for breakfast."
            )
        })

        test("Translate We had a party at my friend's condo. to British English", ()=>{
            assert.strictEqual(
                ts.translateToBritish("We had a party at my friend's condo."),
                "We had a party at my friend's flat."
            )
        })

        test("Translate Can you toss this in the trashcan for me? to British English", ()=>{
            assert.strictEqual(
                ts.translateToBritish("Can you toss this in the trashcan for me?"),
                "Can you toss this in the bin for me?"
            )
        })

        test("Translate The parking lot was full. to British English", ()=>{
            assert.strictEqual(
                ts.translateToBritish("The parking lot was full."),
                "The car park was full."
            )
        })

        test("Translate Like a high tech Rube Goldberg machine. to British English", ()=>{
            assert.strictEqual(
                ts.translateToBritish("Like a high tech Rube Goldberg machine."),
                "Like a high tech Heath Robinson device."
            )
        })

        test("Translate To play hooky means to skip class or work. to British English", ()=>{
            assert.strictEqual(
                ts.translateToBritish("To play hooky means to skip class or work."),
                "To bunk off means to skip class or work."
            )
        })

        test("Translate No Mr. Bond, I expect you to die. to British English", ()=>{
            assert.strictEqual(
                ts.translateToBritish("No Mr. Bond, I expect you to die."),
                "No Mr Bond, I expect you to die."
            )    
        })

        test("Translate Lunch is at 12:15 today. to British English", ()=>{
            assert.strictEqual(
                ts.translateToBritish("Lunch is at 12:15 today."),
                "Lunch is at 12.15 today."
            )
        })
    })

    suite('Translate to American', ()=>{
        test("Translate We watched the footie match for a while. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("We watched the footie match for a while."),
                "We watched the soccer match for a while."
            )
        })
        
        test("Translate Paracetamol takes up to an hour to work. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("Paracetamol takes up to an hour to work."),
                "Tylenol takes up to an hour to work."
            )
        })

        test("Translate First, caramelise the onions. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("First, caramelise the onions."),
                "First, caramelize the onions."
            )
        })
        
        test("Translate I spent the bank holiday at the funfair. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("I spent the bank holiday at the funfair."),
                "I spent the public holiday at the carnival."
            )
        })
        
        test("Translate I had a bicky then went to the chippy. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("I had a bicky then went to the chippy."),
                "I had a cookie then went to the fish-and-chip shop."
            )
        })
        
        test("Translate I've just got bits and bobs in my bum bag. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("I've just got bits and bobs in my bum bag."),
                "I've just got odds and ends in my fanny pack."
            )
        })
        
        test("Translate The car boot sale at Boxted Airfield was called off. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("The car boot sale at Boxted Airfield was called off."),
                "The swap meet at Boxted Airfield was called off."
            )
        })
        
        test("Translate Have you met Mrs Kalyani? to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("Have you met Mrs Kalyani?"),
                "Have you met Mrs. Kalyani?"
            )
        })
        
        test("Translate Prof Joyner of King's College, London. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("Prof Joyner of King's College, London."),
                "Prof. Joyner of King's College, London."
            )
        })
        
        test("Translate Tea time is usually around 4 or 4.30. to American English", ()=>{
            assert.strictEqual(
                ts.translateToAmerican("Tea time is usually around 4 or 4.30."),
                "Tea time is usually around 4 or 4:30."
            )
        })
        
    })

    suite('Test translation Highlights', ()=>{
        test("Highlight translation in Mangoes are my favorite fruit.", ()=>{
            assert.strictEqual(
                ts.translateAndHighlights("Mangoes are my favorite fruit.", LocaleLang.AMERICAN_TO_BRITISH),
                'Mangoes are my <span class="highlight">favourite</span> fruit.',
                "Expected to highlight favourite"
            )
        })

        test("Highlight translation in I ate yogurt for breakfast.", ()=>{
            assert.strictEqual(
                ts.translateAndHighlights("I ate yogurt for breakfast.", LocaleLang.AMERICAN_TO_BRITISH),
                'I ate <span class="highlight">yoghurt</span> for breakfast.',
                "Expected to highlight yoghurt"
            )
        })

        test("Highlight translation in We watched the footie match for a while.", ()=>{
            assert.strictEqual(
                ts.translateAndHighlights("We watched the footie match for a while.", LocaleLang.BRITISH_TO_AMERICAN),
                'We watched the <span class="highlight">soccer</span> match for a while.',
                "Expected to highlight soccer"
            )
        })

        test("Highlight translation in Paracetamol takes up to an hour to work.", ()=>{
            assert.strictEqual(
                ts.translateAndHighlights("Paracetamol takes up to an hour to work.", LocaleLang.BRITISH_TO_AMERICAN),
                '<span class="highlight">Tylenol</span> takes up to an hour to work.',
                "Expected to highlight Tylenol"
            )
        })

    })
});

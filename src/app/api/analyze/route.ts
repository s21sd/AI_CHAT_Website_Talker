import * as cheerio from 'cheerio';

import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest, res: NextResponse) {

    try {
        const response = await fetch('https://www.w3schools.com/html/default.asp');
        const html = await response.text();
        const $ = cheerio.load(html);
        const textContent = $('body').text();
        console.log(textContent);


        // Send the extracted text to OpenAI or another NLP API
        // const nlpResponse = await fetch('https://api.openai.com/v1/completions', {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         model: 'text-davinci-004',
        //         prompt: `Analyze and summarize the content of this website: ${textContent}`,
        //         max_tokens: 100,
        //     }),
        // });

        // const nlpData = await nlpResponse.json();
        // const message = nlpData.choices[0].text.trim();

        return NextResponse.json({
            message: "Got data", textContent
        }, {
            status: 200
        })
    } catch (error) {
        // res.status(500).json({ error: 'Failed to fetch or analyze the website content.' });
        return NextResponse.json({
            message: "Not Got data"
        }, {
            status: 500
        })
    }

}


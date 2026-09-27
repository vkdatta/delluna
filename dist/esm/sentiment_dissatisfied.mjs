export const name="sentiment_dissatisfied";
export const id="dl_81ad421a22887822d7da";
export const url=new URL("../icons/sentiment_dissatisfied.svg?v=df52078415928e044c01ea511c88d8efb07aa8a9b4d4cfaf361c2a991d9c99d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

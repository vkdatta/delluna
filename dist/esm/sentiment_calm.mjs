export const name="sentiment_calm";
export const id="dl_b1a1ac9a0c39b7ebdef9";
export const url=new URL("../icons/sentiment_calm.svg?v=1dc9c7d097d833144cffafd7f532751c2562a4842eee25704481213fcfd8d33f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

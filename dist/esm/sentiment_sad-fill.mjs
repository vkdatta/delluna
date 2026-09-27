export const name="sentiment_sad-fill";
export const id="dl_b2246fffd4440292f825";
export const url=new URL("../icons/sentiment_sad-fill.svg?v=eb99d4f6d2639e06f02b21855bd9b83c0931981e5c7a613a95281f4b52449411",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

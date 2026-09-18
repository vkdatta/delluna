export const name="sentiment_dissatisfied-fill";
export const id="dl_d158dabc675f4d409915";
export const url=new URL("../icons/sentiment_dissatisfied-fill.svg?v=a0f3ee684e1a3c85af66abfe2f0bee0b49a31892747c04b54e9e9b976a5f6a4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

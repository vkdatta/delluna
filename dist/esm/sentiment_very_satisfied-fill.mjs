export const name="sentiment_very_satisfied-fill";
export const id="dl_e13158631a3f21b83375";
export const url=new URL("../icons/sentiment_very_satisfied-fill.svg?v=29bee9cb5e68576ee288f9f01ce5e106c6e8c5d632598b31341156562313e457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

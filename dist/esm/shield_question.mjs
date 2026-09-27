export const name="shield_question";
export const id="dl_28cd67a4ac7b77dd8d3f";
export const url=new URL("../icons/shield_question.svg?v=5246735a4b0f06669519947ad625db3bc2b097d7f5c102c422017fa8736ba5ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

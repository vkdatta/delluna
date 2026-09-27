export const name="lightbulb-filament-fill";
export const id="dl_0106aeda077d41548c40";
export const url=new URL("../icons/lightbulb-filament-fill.svg?v=399cd32d8d66710e082cfb315d5e69a1b49425cc560712a847680257b84394c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="seat-light";
export const id="dl_22e923e93b697d21ffe0";
export const url=new URL("../icons/seat-light.svg?v=692f62551f3acdc5462fc908e0a1d2a893d63e6cd28885f1a53c88c4937995a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

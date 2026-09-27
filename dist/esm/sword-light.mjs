export const name="sword-light";
export const id="dl_933a6526f097d08b651b";
export const url=new URL("../icons/sword-light.svg?v=75f386563a9f212b6a7c3e1d8bd3ad3c84c7e569a7b16e7c9bff69b2744cffab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

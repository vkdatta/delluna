export const name="arrow-square-up-bold";
export const id="dl_f7e70af0f0404ef1a8ea";
export const url=new URL("../icons/arrow-square-up-bold.svg?v=97ad20e0652387d7499807b30f7a9ab954ef00152020d3c02f3cd9266609efa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

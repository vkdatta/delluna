export const name="sticker-bold";
export const id="dl_698dd8528db164e0d110";
export const url=new URL("../icons/sticker-bold.svg?v=547df0c3c2c89b7eeff50f90b5ce43783e65705e132b9df7877c5703035aebbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

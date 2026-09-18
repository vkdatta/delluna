export const name="water_do";
export const id="dl_3bb444084c184233be60";
export const url=new URL("../icons/W/water_do.svg?v=b2c9bc7d5383ef3c6159945316d6b0f934e6561c600e02b3e78659dd74eb554e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

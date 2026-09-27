export const name="spade-bold";
export const id="dl_a6f517dd250de7b44a11";
export const url=new URL("../icons/spade-bold.svg?v=f721be2e34e31135d7d0e2c088e19f6026d2a372381ac5a34fd75b94de8908c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

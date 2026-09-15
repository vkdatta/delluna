export const name="contrast";
export const id="dl_6057e8996c2d4c94a885";
export const url=new URL("../icons/C/contrast.svg?v=754f768e0e280880e5ee22615589659e0406a2664d15c46b2945c0decc030a66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

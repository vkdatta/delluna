export const name="box-frame-cross";
export const id="dl_2faccf6bed63eb84e06b";
export const url=new URL("../icons/box-frame-cross.svg?v=0d1a4450d3120f937986bc2f2d60a8ba5af5df3c4e3821844ca1037af7b4bc7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

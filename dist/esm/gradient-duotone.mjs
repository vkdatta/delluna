export const name="gradient-duotone";
export const id="dl_f8f5833abb5f4e1daaaf";
export const url=new URL("../icons/gradient-duotone.svg?v=6d810393d0c45b1661aa2c2f5f8e89e3d9e8e3cd201920953a6953caa8ff3596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

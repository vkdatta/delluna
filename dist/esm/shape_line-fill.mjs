export const name="shape_line-fill";
export const id="dl_513d3209d94b0cb1c335";
export const url=new URL("../icons/shape_line-fill.svg?v=1f726bf3d63f3dfc39f5e255b4e33ba2d314f8263ccd74fd73dac391aaf6f3d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

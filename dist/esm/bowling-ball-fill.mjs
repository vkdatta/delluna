export const name="bowling-ball-fill";
export const id="dl_c8008623908542af865c";
export const url=new URL("../icons/bowling-ball-fill.svg?v=f723d068fbacbdecb9f99583a62342fe4387a53c59c28e7e654b5ec5d1e6d5b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

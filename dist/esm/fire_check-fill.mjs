export const name="fire_check-fill";
export const id="dl_8e4f2d7d185640af8cab";
export const url=new URL("../icons/F/fire_check-fill.svg?v=ba347030afd01cd58e4a0afcbb22fed35ef4e3c26ec6f12e52dc51e28ce1831c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

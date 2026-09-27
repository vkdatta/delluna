export const name="ungroup";
export const id="dl_0bfcc4db382e4d588cdb";
export const url=new URL("../icons/ungroup.svg?v=65f32cac29b9137aeb6d1dc606ea070d49017864adeb97263714f05874b3c6c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

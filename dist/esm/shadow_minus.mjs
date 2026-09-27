export const name="shadow_minus";
export const id="dl_1d8ecce6b0cfa082a22d";
export const url=new URL("../icons/shadow_minus.svg?v=1879079615d0489ada8b2aaeeccea51848987f368dfba55d83b1885ccd7fc7ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

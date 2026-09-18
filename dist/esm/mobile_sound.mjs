export const name="mobile_sound";
export const id="dl_f36969ebaa9e490c9acd";
export const url=new URL("../icons/mobile_sound.svg?v=1d1605a389534128297486de2410f90dcf2a8fdbb1d51588f1f7a1330afc5583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

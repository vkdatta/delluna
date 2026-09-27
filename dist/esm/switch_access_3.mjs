export const name="switch_access_3";
export const id="dl_d2b2881a6b295b2bf9f2";
export const url=new URL("../icons/switch_access_3.svg?v=638363d3dafbc8aec83e13d2d59356872c0b48ea90519157c988043295e6c3b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

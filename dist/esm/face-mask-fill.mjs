export const name="face-mask-fill";
export const id="dl_1b5ba973d4ab45f0b13e";
export const url=new URL("../icons/face-mask-fill.svg?v=1d2a177721aa1fe03f4963480d41ab287694077023af71c460c18fc96e7fef76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

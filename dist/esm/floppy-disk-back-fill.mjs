export const name="floppy-disk-back-fill";
export const id="dl_8e0f51c471634bf28da2";
export const url=new URL("../icons/floppy-disk-back-fill.svg?v=66fc6e478ea7f343d723fc4648ce1c1a39f1158b1298f114ab059ecb74fd0fcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

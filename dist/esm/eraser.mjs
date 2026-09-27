export const name="eraser";
export const id="dl_f066ee01b0344e3481b0";
export const url=new URL("../icons/eraser.svg?v=2e223a056d2eeac0b73c32f64edc2d1149cff1107ae7e67f15634ae35c51df61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

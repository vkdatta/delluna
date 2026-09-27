export const name="keyboard_arrow_up-fill";
export const id="dl_f2fa5136fd1c6801375b";
export const url=new URL("../icons/keyboard_arrow_up-fill.svg?v=1b6eba431871e198b67c47265f9897b42260ce270ac00894617f99371a5da0e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="touchpad";
export const id="dl_abb1fc7a0f994e898400";
export const url=new URL("../icons/touchpad.svg?v=8e5e3d1aee9cf46a1605acf729bc6ea8dd0735165f3c0f610a02c9317821bf85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

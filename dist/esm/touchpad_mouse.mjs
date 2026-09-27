export const name="touchpad_mouse";
export const id="dl_d1e31335544844f11d11";
export const url=new URL("../icons/touchpad_mouse.svg?v=05a09a209b7627cdf018fcc00fb4429aa11dcaa399ba3dd8f7795f5a383323d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

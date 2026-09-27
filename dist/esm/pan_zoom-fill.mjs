export const name="pan_zoom-fill";
export const id="dl_f589c7d4269f65d8c3c1";
export const url=new URL("../icons/pan_zoom-fill.svg?v=0efa3c382cbe03ec05c52369ba8ff9ba6a0f6bc2df23a9a64790325954d8a230",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="public-fill";
export const id="dl_e99fb944bba5e979d212";
export const url=new URL("../icons/public-fill.svg?v=ee8c4e4d39a5d696c7a96a0174b92c6eb9217d55d63ca9361773db42fc5f28e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

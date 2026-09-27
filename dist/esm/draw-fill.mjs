export const name="draw-fill";
export const id="dl_5ba08a2ef29132d62c27";
export const url=new URL("../icons/draw-fill.svg?v=744cd58034b1b2e538b1bc669bca037ced34e44120a5deef044e4cef57e5f78d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

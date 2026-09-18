export const name="segment-fill";
export const id="dl_815729f50bb14fd386f0";
export const url=new URL("../icons/segment-fill.svg?v=d9c80ca678431331ee7bcc5b77d425daf3a1710eba5958feae05076852dbb810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

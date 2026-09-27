export const name="cloud_download-fill";
export const id="dl_24d17e83c1c099928fc0";
export const url=new URL("../icons/cloud_download-fill.svg?v=c0a3214c5e9d15d23241e04286796c4c12f2e79cae72343a7ae99097e4b619cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

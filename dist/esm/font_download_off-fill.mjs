export const name="font_download_off-fill";
export const id="dl_0c8801a30f877b757d5c";
export const url=new URL("../icons/font_download_off-fill.svg?v=d3bff030db94d8d1f11254e2b433b85ec97060f553cbdfb84bafa4e3288f5198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

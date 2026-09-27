export const name="hourglass_top-fill";
export const id="dl_cb62441850120013333d";
export const url=new URL("../icons/hourglass_top-fill.svg?v=c25f0962c7c6bc6d936e1859414620403a45dfeb5988132af52b56eed1a4ff06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

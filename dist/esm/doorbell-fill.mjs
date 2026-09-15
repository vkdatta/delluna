export const name="doorbell-fill";
export const id="dl_a3bb157014f7455498fb";
export const url=new URL("../icons/D/doorbell-fill.svg?v=d29641d81b0dbe5f2d94a20e879daf29a919c8831f8fe2d715bad2d43473b98c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

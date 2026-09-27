export const name="lucid_2-file-text";
export const id="dl_fce542604fc943e28ead";
export const url=new URL("../icons/lucid_2-file-text.svg?v=dd77a21324d8e7a58651da88b8d34978e070fbed82e8a5353c8370dbdf4797ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

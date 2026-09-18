export const name="videocam_off-fill";
export const id="dl_fd7bb438a7f54a10894c";
export const url=new URL("../icons/videocam_off-fill.svg?v=2f9f751f8cbfacfdc24ee3bac437b1b044ddc1d57712b917e82c7d25e8e4525e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

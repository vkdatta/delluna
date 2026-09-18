export const name="time_auto-fill";
export const id="dl_2933098454f74e838f49";
export const url=new URL("../icons/time_auto-fill.svg?v=4fe76ade0723786e00d0d37003afd54980b6f088e63cf8bcde8997585dd8c733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

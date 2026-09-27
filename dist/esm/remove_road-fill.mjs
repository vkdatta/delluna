export const name="remove_road-fill";
export const id="dl_3daa43d6d3620ff00a32";
export const url=new URL("../icons/remove_road-fill.svg?v=181f563be737b3fcaf3326ea1e00c6b827f793327bd34c397e01123a3888706c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

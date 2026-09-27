export const name="rear_camera-fill";
export const id="dl_d709e1c11d6a36b0d742";
export const url=new URL("../icons/rear_camera-fill.svg?v=bc4015a5e3aeef5ad25b102ceb7f4ce279653afe7ff4538e446c1a18a9bb649b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

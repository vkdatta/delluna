export const name="view_object_track-fill";
export const id="dl_0e66946041a7ee7edbcd";
export const url=new URL("../icons/view_object_track-fill.svg?v=7160d4b8a8fbdbdc31bf39595a5454f4ab8227ada2e97a39582e2e1c2850e550",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

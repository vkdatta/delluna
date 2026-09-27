export const name="nest_cam_outdoor-fill";
export const id="dl_4be5b92aa40a7d417ff3";
export const url=new URL("../icons/nest_cam_outdoor-fill.svg?v=09a3a7aff6735070bc1a43a33ab1a9d765911a13cd139ff584f68963f96e3510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

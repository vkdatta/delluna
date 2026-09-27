export const name="nest_cam_iq-fill";
export const id="dl_f5048338cdd60fc3f4f7";
export const url=new URL("../icons/nest_cam_iq-fill.svg?v=81d256a4d3927e93280eb6ea1d7d24998bdd4703837eed66e92029ff20f93609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

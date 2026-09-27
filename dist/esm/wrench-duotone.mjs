export const name="wrench-duotone";
export const id="dl_90fef0203c254e7fd281";
export const url=new URL("../icons/wrench-duotone.svg?v=3117d77f27736d0dddbbfbc4f060f1ced4dbc007b2d2503be3d7857b127fc655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

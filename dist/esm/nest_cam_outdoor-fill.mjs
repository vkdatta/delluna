export const name="nest_cam_outdoor-fill";
export const id="dl_6764bfc7695f720e9455";
export const url=new URL("../icons/nest_cam_outdoor-fill.svg?v=cc9ba128c2759f06564c19bbccb0f4cdce7c6568b69f33c033bcaaf30f585fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

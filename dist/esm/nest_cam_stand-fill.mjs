export const name="nest_cam_stand-fill";
export const id="dl_2fa42054fb9789c35e5f";
export const url=new URL("../icons/nest_cam_stand-fill.svg?v=77d670737fe54724afed9ca72951fc6f06f86a2b56759e0a3c837ea86a1e68f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

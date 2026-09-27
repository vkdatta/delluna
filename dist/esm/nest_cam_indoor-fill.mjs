export const name="nest_cam_indoor-fill";
export const id="dl_3c87678f317d5bb86fc0";
export const url=new URL("../icons/nest_cam_indoor-fill.svg?v=9f6a5b7ab4a4f4ea72485b047d87eb2e4ca34fb5fc7023c14bded2b80400208d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

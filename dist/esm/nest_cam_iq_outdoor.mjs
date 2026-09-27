export const name="nest_cam_iq_outdoor";
export const id="dl_339074ef1159000ef7f2";
export const url=new URL("../icons/nest_cam_iq_outdoor.svg?v=4369779e58e5bbae56634d9b10af0edd336eea55cb79096aa8e64e2264afdcef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

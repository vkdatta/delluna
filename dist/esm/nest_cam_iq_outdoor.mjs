export const name="nest_cam_iq_outdoor";
export const id="dl_19e78dfe4c2ee9d6da30";
export const url=new URL("../icons/nest_cam_iq_outdoor.svg?v=66d373c4c9e235f30d5e29a045e9652b0fe10ef0eeeff9d59e0d26a8ba704fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="user-pen";
export const id="dl_b4e30c82d8b941189a92";
export const url=new URL("../icons/user-pen.svg?v=12448428070f5f8f6e55e0f3906f89d9e9f199cfea9089a9fc02cbf0ec2e967a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

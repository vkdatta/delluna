export const name="network";
export const id="dl_cc8d626c6f064e5db764";
export const url=new URL("../icons/network.svg?v=291e3cde4df0051579efe5a355c32d26a4362ea883853d887570caa93e82e03e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

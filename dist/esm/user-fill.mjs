export const name="user-fill";
export const id="dl_eef96638a37f01a8ff7f";
export const url=new URL("../icons/user-fill.svg?v=4af8de8b9250807dafac0a634c0f2ebef74d7ef54441cefbacfea5e14c37fdb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

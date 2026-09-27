export const name="empty_dashboard";
export const id="dl_0b451e6d74d1b194f672";
export const url=new URL("../icons/empty_dashboard.svg?v=f3a2fc352c45479f4a398673fc48a9440ab57fdb650087383801459544eee5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

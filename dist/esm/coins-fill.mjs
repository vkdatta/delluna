export const name="coins-fill";
export const id="dl_fc3f352c4aa1419e847b";
export const url=new URL("../icons/coins-fill.svg?v=c785746fe4d82b6b6af67e48d5478a5669bd7bcc59dc741f7f3d2a70fb2947f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

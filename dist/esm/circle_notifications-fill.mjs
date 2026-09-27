export const name="circle_notifications-fill";
export const id="dl_3d2b9aa1424af5684b07";
export const url=new URL("../icons/circle_notifications-fill.svg?v=9aadead75d9d757a4ffe13f7a36d903748e53610a04bde56434960ed78d7080f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="circle_notifications";
export const id="dl_dcb59452c53943df96b0";
export const url=new URL("../icons/circle_notifications.svg?v=c8c1521f410fc11c5a52c603eb38bb8a814db372e74e5757ab1a5f59629e0ae8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

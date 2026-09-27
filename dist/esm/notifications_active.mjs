export const name="notifications_active";
export const id="dl_e511027ba408cc6fcdf0";
export const url=new URL("../icons/notifications_active.svg?v=3046aa34c752e603a23840c160cf8a9d23a49326037231ff45810259191ba1d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

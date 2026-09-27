export const name="goggles";
export const id="dl_565f4a2fc35948ceb918";
export const url=new URL("../icons/goggles.svg?v=7f2ae40f7693aedabcc6cc4c705f13421f7b381bcd6b538e7eb847a1980f86b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="notifications_active";
export const id="dl_bbf1ca58a6dc04bd9412";
export const url=new URL("../icons/notifications_active.svg?v=987c03c4177779dcfed0a60f755fa7d1117e35e4ecd9fe342fd5568a7c783de6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

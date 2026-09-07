export const name="pause";
export const id="dl_d2a403da52f04e20be8a";
export const url=new URL("../icons/pause.svg?v=7a9a8fe311234262b85c6e332f77db4ba9a59b6ca4292c41d327977cf61a2fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

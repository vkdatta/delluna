export const name="garage-bold";
export const id="dl_4e6f18adadbd4470931f";
export const url=new URL("../icons/garage-bold.svg?v=f8231e806051895b6f3493af52c0d097c57ec3e07036ee1f442b594023d88eb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="invoice-bold";
export const id="dl_3deecd4b683546c1bebe";
export const url=new URL("../icons/invoice-bold.svg?v=38d3b05dad5de607dc07fc34bb26581ef993fe63fea667deddb8f64fcaf1b4ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

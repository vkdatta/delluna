export const name="warehouse";
export const id="dl_f4e3448362064335896a";
export const url=new URL("../icons/W/warehouse.svg?v=26cb320cecaed5ce66ef1a493e0d2d4b65807515947292ba1d0c6bb727919f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

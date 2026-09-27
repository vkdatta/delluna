export const name="moped_package";
export const id="dl_24f96849302dfb2460f3";
export const url=new URL("../icons/moped_package.svg?v=8e31b0e7dcaf2b29c0dcd497de436264a7490fb8584e732864df5bfc64210039",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

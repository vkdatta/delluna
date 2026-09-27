export const name="alarm-fill";
export const id="dl_cbf73d6f82814a52af18";
export const url=new URL("../icons/alarm-fill.svg?v=0ea0cbef39c7533132ed72eb4c8752acd5a74c564903dd53210575ca8efa0976",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

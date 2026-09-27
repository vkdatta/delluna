export const name="rib_cage-fill";
export const id="dl_bfc2bc7b2c9c18e001e5";
export const url=new URL("../icons/rib_cage-fill.svg?v=df0c5b0f1d50eafa58b7073bdfb3afe1e047d1433dc8050f1a092797a8ee29f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="data_loss_prevention-fill";
export const id="dl_aa1280fba3d00f796f2a";
export const url=new URL("../icons/data_loss_prevention-fill.svg?v=9d5fc7b5590626d1fb2cce0430566ac44c6f3db70b7aab1cb059fa3240475980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="cardio_load-fill";
export const id="dl_ac960e57cf0ea183de39";
export const url=new URL("../icons/cardio_load-fill.svg?v=2c86039993595187171952e4089c91ed26287a87df6a51d71665d066c3ba2f54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

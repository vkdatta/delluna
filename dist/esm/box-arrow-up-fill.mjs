export const name="box-arrow-up-fill";
export const id="dl_5f92ecfd890046a58d8f";
export const url=new URL("../icons/box-arrow-up-fill.svg?v=6035173194ba322c7b3e69a78b20b3861d8d5366a7ee1b5a9c9e597fa30fa526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

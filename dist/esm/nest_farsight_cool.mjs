export const name="nest_farsight_cool";
export const id="dl_57c3a34690c0e060cc4f";
export const url=new URL("../icons/nest_farsight_cool.svg?v=0d2f7c1e97244b3dd94d59abe84304a2bc74644a655c204ca5a9da66dc99a1b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

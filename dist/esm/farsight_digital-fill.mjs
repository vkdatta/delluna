export const name="farsight_digital-fill";
export const id="dl_8db7f04afb7d3f5c1e1e";
export const url=new URL("../icons/farsight_digital-fill.svg?v=20078f1fa912c5a88a41fe75433f9dbe33ec7e0037a0de901cc4c9dfe6b26b22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="parking_valet-fill";
export const id="dl_f7e3cdb92bf05b9934e1";
export const url=new URL("../icons/parking_valet-fill.svg?v=4967a9ab9a95cbe4942f007c07c85200f93c7efae59298f2de53b5a278db0915",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

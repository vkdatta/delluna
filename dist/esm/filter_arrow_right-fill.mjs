export const name="filter_arrow_right-fill";
export const id="dl_b953092031c86756a5a2";
export const url=new URL("../icons/filter_arrow_right-fill.svg?v=d3a52f59587da9540f1ca02c1c087b37dfb693b4322c98e5b7b16b807f2f3b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

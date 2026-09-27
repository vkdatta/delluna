export const name="infrared";
export const id="dl_98ac6400f188b6477597";
export const url=new URL("../icons/infrared.svg?v=88a5469caf957fbdbf5171ca58431ad415b1a524be7be7f2f6565dd31f17c997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

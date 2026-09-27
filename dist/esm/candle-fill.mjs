export const name="candle-fill";
export const id="dl_a9dd740c7398defb2aea";
export const url=new URL("../icons/candle-fill.svg?v=ecacb6bfdec411fdc829fdfc45c4273c423f83606b3a319a5dd8ad111a870e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="clear_day-fill";
export const id="dl_c48d01400704c6223f1b";
export const url=new URL("../icons/clear_day-fill.svg?v=b91672986bbc321002b65986a0ac109fa6354d3b3f1e105d4a2a2e8390f32079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

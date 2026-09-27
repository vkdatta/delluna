export const name="counter_9-fill";
export const id="dl_cf86e4e377f889b1d33a";
export const url=new URL("../icons/counter_9-fill.svg?v=ec1d028c1b04975fb426f7b9d23929ff1d4f9b86122037fc45f2ebb31b7ee0cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

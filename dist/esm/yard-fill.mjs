export const name="yard-fill";
export const id="dl_0d130135ced24084e4e6";
export const url=new URL("../icons/yard-fill.svg?v=a3168ccb86480ea9b5559e7ead1cab4754dc63d237ad7dd1558a422701362612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

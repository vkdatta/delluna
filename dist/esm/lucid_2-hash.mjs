export const name="lucid_2-hash";
export const id="dl_9a5acb23126d40398fec";
export const url=new URL("../icons/lucid_2-hash.svg?v=0ef41724cec887c962f168f66052578da14254867075967e6072d5c44a25598b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

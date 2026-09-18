export const name="two_wheeler-fill";
export const id="dl_041079fae2eb48f3adca";
export const url=new URL("../icons/two_wheeler-fill.svg?v=b9ef58f9f7003a65a1263225b5fdd8875225aa9383d5f0be7cfaab1524a62486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

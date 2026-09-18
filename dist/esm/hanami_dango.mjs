export const name="hanami_dango";
export const id="dl_36c6eadc6fc940b88137";
export const url=new URL("../icons/H/hanami_dango.svg?v=faedd74c780e2e05e85463caf9198f492e4b26d71e6046943d1602b2ed6747b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="loyalty";
export const id="dl_ef950e23606a65a4f27f";
export const url=new URL("../icons/loyalty.svg?v=4e39d388f7f0d3bbaaeebcb3e86396233a193be94fcb42d432de90d756da28c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

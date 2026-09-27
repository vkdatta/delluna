export const name="trending_down-fill";
export const id="dl_0c84ad57bcead0fbe1b9";
export const url=new URL("../icons/trending_down-fill.svg?v=b011b7747d9e8ade083c7d51af5dd2810ea9529a1f38e64c779ff85e113ed46d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

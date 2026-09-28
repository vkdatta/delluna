export const name="all_out-fill";
export const id="dl_3458db4535c3441b40d2";
export const url=new URL("../icons/all_out-fill.svg?v=fea95d3e7e02043029dfd6b729fa0191f441bd77310e961f3ed6d0bdaf38666d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

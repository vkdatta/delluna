export const name="amazon-logo-fill";
export const id="dl_11f04a49cfaf4215b900";
export const url=new URL("../icons/amazon-logo-fill.svg?v=5a116da3df6602eb603196d763686dfffc59e4c91704ce0d51cbb26dd15beadd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

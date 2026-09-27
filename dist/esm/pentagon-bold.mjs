export const name="pentagon-bold";
export const id="dl_fd09de2d38334e38ab49";
export const url=new URL("../icons/pentagon-bold.svg?v=1f701cb7b2b95668392d3cc1e6486a5426878756bae3cf3bf900a936c00874c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

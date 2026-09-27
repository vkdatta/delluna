export const name="man-fill";
export const id="dl_10e59e489a40eba0583b";
export const url=new URL("../icons/man-fill.svg?v=f3cdaaeaa46348446d410a3dbab2dc735253bb6081d2df1dbb28de30ac9ffd82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

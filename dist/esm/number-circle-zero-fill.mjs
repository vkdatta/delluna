export const name="number-circle-zero-fill";
export const id="dl_768183f1a1a142b18814";
export const url=new URL("../icons/number-circle-zero-fill.svg?v=d617561edeb6ab6bc8155511fc954c7db1d0af3966b0077105342c737fa56c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

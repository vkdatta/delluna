export const name="contract-fill";
export const id="dl_ad1dd43ceeeb5ac73391";
export const url=new URL("../icons/contract-fill.svg?v=3ff2b37f26b7d6a60427aa42aa4db6c54201a5db73228af1941375849931e4e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

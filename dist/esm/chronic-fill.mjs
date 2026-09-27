export const name="chronic-fill";
export const id="dl_38d8e609b0fe60f25236";
export const url=new URL("../icons/chronic-fill.svg?v=39dff6aabab6b0823e45595d0543712b52b8eb9c0cb053c833ff7e599f2e3f7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

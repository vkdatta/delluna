export const name="hash-straight-duotone";
export const id="dl_f31e09e356744fe59e43";
export const url=new URL("../icons/hash-straight-duotone.svg?v=abc19c3c3c3813aa4e4de59316519f0592f34b36e4ac8a3da54bf3300b09ca3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

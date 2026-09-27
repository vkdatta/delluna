export const name="ruler-duotone";
export const id="dl_db1aa647f97b494ea5ba";
export const url=new URL("../icons/ruler-duotone.svg?v=11489bae644dcdfbfbbf6efaa082a99eaeaf6a73324408a02d9cff82caa16ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

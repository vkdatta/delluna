export const name="piano-keys-bold";
export const id="dl_8d6c6e83d89e42d58182";
export const url=new URL("../icons/piano-keys-bold.svg?v=3db3a72081b40a5f3b6942f7fd7be6990901b94488ede0162e0e1498f06a8ec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

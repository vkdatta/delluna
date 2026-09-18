export const name="tablet-fill";
export const id="dl_020bad1f7a83431aba8e";
export const url=new URL("../icons/tablet-fill.svg?v=6af54686eccbd9e7aa094b57a4a63cb8b561c2662e54a324c2cce324e58512bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ice_skating-fill";
export const id="dl_0067a9d49fc5cecae14b";
export const url=new URL("../icons/ice_skating-fill.svg?v=f9dda0ae0f23a04907c0359727d9e2516b2a982c975b9d9930d3ab45b2ae80d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

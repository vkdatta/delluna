export const name="table-fill";
export const id="dl_0c32e7bd57fd0f06927f";
export const url=new URL("../icons/table-fill.svg?v=ef87b975c444de6fb2f053a02570f0dea880683f140ebbdb2ff6cd0322ab553f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

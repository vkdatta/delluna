export const name="four-k-fill";
export const id="dl_17477e6d9abd42f8b0e5";
export const url=new URL("../icons/four-k-fill.svg?v=356c125fe9306b41a057ec5d6a8ae34457d2af1aa7e221578d5444da6052f024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

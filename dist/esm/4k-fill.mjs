export const name="4k-fill";
export const id="dl_7896a758f03774d594d3";
export const url=new URL("../icons/4k-fill.svg?v=9f4b32f326f359a90d3eeb301ce55bc484d77f721eb086ce4d7f005692a74db7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

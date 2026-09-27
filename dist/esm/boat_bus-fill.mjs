export const name="boat_bus-fill";
export const id="dl_3e2d170d06f17910aea5";
export const url=new URL("../icons/boat_bus-fill.svg?v=8a07d6289fc930645390fd87ca23508239cfd66e6d45aa422364f74f912b2a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

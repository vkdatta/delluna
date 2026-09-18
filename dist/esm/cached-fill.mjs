export const name="cached-fill";
export const id="dl_3426f97acc8448f6bf40";
export const url=new URL("../icons/cached-fill.svg?v=058fae039581cf470429deb84c00dc9907bee202ef0c35775b3b573afd63c8b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

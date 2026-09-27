export const name="satellite_alt";
export const id="dl_21b5d16412ba3b3735be";
export const url=new URL("../icons/satellite_alt.svg?v=376c82fee7f9b2ed413c4795ef87cd9f9b9b37b505f81af183f0dc37091201df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

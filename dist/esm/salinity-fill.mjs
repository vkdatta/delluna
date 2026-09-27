export const name="salinity-fill";
export const id="dl_d0803befcd579b180ce9";
export const url=new URL("../icons/salinity-fill.svg?v=51369c10bbecf121985a7f711b6d7d8541ab671a22cdf51af3dc8a6f4ca2e62c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

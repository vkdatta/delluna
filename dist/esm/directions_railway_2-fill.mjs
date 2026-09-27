export const name="directions_railway_2-fill";
export const id="dl_b98c535d88525684a699";
export const url=new URL("../icons/directions_railway_2-fill.svg?v=42547747514b787c83a1745031615573d53edb903e27feb2e7581f01da734328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

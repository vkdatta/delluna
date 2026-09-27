export const name="magnify_docked-fill";
export const id="dl_b31190bb6994afb1186d";
export const url=new URL("../icons/magnify_docked-fill.svg?v=deba28be32c6d35e83ba0da1d1822fa39b9341b3f15ba235d852339b49613be1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

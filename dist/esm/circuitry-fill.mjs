export const name="circuitry-fill";
export const id="dl_91b247e687ea445ca92d";
export const url=new URL("../icons/circuitry-fill.svg?v=c84c8a90b4ac138de09961c1f3af3f350478e19b9a8e96929583fb09f37f96ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

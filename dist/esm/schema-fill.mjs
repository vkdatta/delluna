export const name="schema-fill";
export const id="dl_906891f1d79a861dc9ab";
export const url=new URL("../icons/schema-fill.svg?v=db9aa9a3095d0e0031343dbd97f8fe01507e995de84ad9e090f7cd7b464e4162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

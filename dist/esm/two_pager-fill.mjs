export const name="two_pager-fill";
export const id="dl_282810fac4cb437aa2c5";
export const url=new URL("../icons/T/two_pager-fill.svg?v=3cb130d3c028bf7339040743c515558d4e061a08a8e814cbae803709475e7e9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

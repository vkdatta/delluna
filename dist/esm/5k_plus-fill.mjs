export const name="5k_plus-fill";
export const id="dl_c534baf960b24770bc2c";
export const url=new URL("../icons/5k_plus-fill.svg?v=80e61e5dcaedd89851b79bdd3b80df96f20a516fad4a72096cfc38e7ec198bf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

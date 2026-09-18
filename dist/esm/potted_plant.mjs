export const name="potted_plant";
export const id="dl_43318298c9054ebeb068";
export const url=new URL("../icons/P/potted_plant.svg?v=7d9c451972947bf798fe24d0babb48ee7971cc6abce0a3fed9790ab5c402889d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

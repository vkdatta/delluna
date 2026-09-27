export const name="deck";
export const id="dl_913ec0134558d787fd86";
export const url=new URL("../icons/deck.svg?v=15697182eaa9437739df0452d2d38eade8354dba61f4f09611b4acaecc9c2523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

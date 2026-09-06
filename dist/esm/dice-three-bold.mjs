export const name="dice-three-bold";
export const id="dl_95868066f92c46dbac8d";
export const url=new URL("../icons/dice-three-bold.svg?v=68ffa020fd65a59940bfb21173ed6cf75bcfda12b72e3a64f717a9ee7b66d3fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

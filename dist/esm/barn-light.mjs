export const name="barn-light";
export const id="dl_8da140538cc94feeb085";
export const url=new URL("../icons/barn-light.svg?v=97f69dd1c1293232e29f059edd9f59003cccaefdeca5170e75107c2c62ae703a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-chevrons-right";
export const id="dl_54b3e7b6a63e467e9b28";
export const url=new URL("../icons/lucid_1-chevrons-right.svg?v=1b9e4d6a0642f371565a18e6420322963db644ea9202f4751912884165273de5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

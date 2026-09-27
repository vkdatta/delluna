export const name="person-simple-bike-fill";
export const id="dl_a018bc5856ce4820b93e";
export const url=new URL("../icons/person-simple-bike-fill.svg?v=03704369baf1e350f621ad3b7cb29b6c11c5af2c3b2c23bf44ffcc7713482db2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

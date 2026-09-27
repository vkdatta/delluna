export const name="lucid_2-group";
export const id="dl_0c836327181141cd967d";
export const url=new URL("../icons/lucid_2-group.svg?v=cebfdb9d01a74ed909a6c0e345b90534d098067087b78dba74fe4927e1edd2b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

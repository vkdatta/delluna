export const name="lucid_2-group";
export const id="dl_0c836327181141cd967d";
export const url=new URL("../icons/lucid_2-group.svg?v=aa354d34938f5ebb69f91986a07acb731be1e5e0240c21b90b7042aa011a9d7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

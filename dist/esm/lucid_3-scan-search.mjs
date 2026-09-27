export const name="lucid_3-scan-search";
export const id="dl_6509383768dc40a088ff";
export const url=new URL("../icons/lucid_3-scan-search.svg?v=fa431d6b4db2a630327a9755f992240b16690446bbb79fcc27f387f357603634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="cloud_sync";
export const id="dl_29b94b3ecd91c7f9f729";
export const url=new URL("../icons/cloud_sync.svg?v=5753f648a4a1849f3ca19a2e92718cdeb5f244bd4241ca18fe65d4fae57f914d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

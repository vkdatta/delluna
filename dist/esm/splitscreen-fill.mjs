export const name="splitscreen-fill";
export const id="dl_0da24da03ccf44b82154";
export const url=new URL("../icons/splitscreen-fill.svg?v=6c4ce1a3c9509b2b2d2e334b32d5a62dde70af12dca031292bfd03d657b9c2ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

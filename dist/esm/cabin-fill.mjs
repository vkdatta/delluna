export const name="cabin-fill";
export const id="dl_c3ed165472a245f29b9c";
export const url=new URL("../icons/cabin-fill.svg?v=5187865c30c6bac470fbf9d417dc43849a7d4b9e5d298ccce2ec22c31877dfc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

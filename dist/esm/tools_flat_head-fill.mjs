export const name="tools_flat_head-fill";
export const id="dl_ccb264fdf97a4a08b0a0";
export const url=new URL("../icons/tools_flat_head-fill.svg?v=007add3599e9f8a6d03ea476992c71dc8d1eb8b30ac4b549e5a2e4709e941538",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

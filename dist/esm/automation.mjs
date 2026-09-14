export const name="automation";
export const id="dl_3e332bf926ae42b99f3d";
export const url=new URL("../icons/A/automation.svg?v=d03fcba4e3b8b52363b5958b2f8ef53b6f89c4a4bba2d52863855b71f96e5ac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

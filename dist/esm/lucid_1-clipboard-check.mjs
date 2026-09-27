export const name="lucid_1-clipboard-check";
export const id="dl_16f82d082e5a4012b382";
export const url=new URL("../icons/lucid_1-clipboard-check.svg?v=b6b04387de24f29cfe1ff157ccc1b697af0de8d35a766dfec4b1d3daccf5aa84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

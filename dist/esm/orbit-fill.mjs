export const name="orbit-fill";
export const id="dl_a7e7405d45ca40f0af8a";
export const url=new URL("../icons/orbit-fill.svg?v=8faac3e82cc0fdedd2db48575a6a6d3d5b0baef4a40cb0b7062f8637514c3e82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

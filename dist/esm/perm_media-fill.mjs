export const name="perm_media-fill";
export const id="dl_75c095d12b6b039aa112";
export const url=new URL("../icons/perm_media-fill.svg?v=f663677fa7ec06494fd6e91db5dd1b0c380b7a61e98e6536f19788a2d37317bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-keyboard-music";
export const id="dl_57fb3a0831e942d8ac9f";
export const url=new URL("../icons/lucid_2-keyboard-music.svg?v=895197bfeeaa83092b751b908087f59979ee4db479bd062985e61ed6706d776b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

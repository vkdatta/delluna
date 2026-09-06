export const name="folder-simple-lock";
export const id="dl_2c9754e20c354f3bba95";
export const url=new URL("../icons/folder-simple-lock.svg?v=603324435b8cb8852ca849fa7cf935dc8af2ee1dc8749e02bb5ad93633ad934c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

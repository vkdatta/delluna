export const name="search-fill";
export const id="dl_1ff6c37af5dbb62a9150";
export const url=new URL("../icons/search-fill.svg?v=afd30e20497042891567648167d54e2a0b39270f1159acb8b214c9da78e9dbae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

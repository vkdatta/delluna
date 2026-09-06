export const name="bookmarks-thin";
export const id="dl_211d43ea14da4cdc8b3a";
export const url=new URL("../icons/bookmarks-thin.svg?v=dbb8a6473fc20172c021b7ecef96bc3ed16e862a076084fa88894f1290763d35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

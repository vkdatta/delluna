export const name="dots-three-outline-fill";
export const id="dl_01ef6bf55c1641ca8f9d";
export const url=new URL("../icons/dots-three-outline-fill.svg?v=0c4489aa704d47cca1dfc69785b25a02ded5d76eaa3dd1db6ad6691c58f35455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

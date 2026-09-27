export const name="dots-three-outline";
export const id="dl_9a944a49afe9401e820a";
export const url=new URL("../icons/dots-three-outline.svg?v=0a7c7b57045d6d4e346baad603e1126d49da984c4dd3bdd5a9dc5853ac5b4cf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

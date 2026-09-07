export const name="folder-star-thin";
export const id="dl_ba6ba5f3739e41699716";
export const url=new URL("../icons/folder-star-thin.svg?v=a5d9ebe15f0994674f124052dbd6a62f5b6ea8d6c49fcb9a8ab30a9c57a4be79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

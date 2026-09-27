export const name="folder-star-bold";
export const id="dl_0c52d5fde5674d7a9a0e";
export const url=new URL("../icons/folder-star-bold.svg?v=e003243d86b38eafa3bd61a8109f06c09249fff64e9e832ba2a967862be4cedb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

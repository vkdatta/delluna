export const name="file-arrow-up-fill";
export const id="dl_da69717040b046199843";
export const url=new URL("../icons/file-arrow-up-fill.svg?v=ee05dd5287b125b932f28b415980e0f86ad90a1b271b527ef0c54a6981d7611b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

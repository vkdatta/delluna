export const name="lucid_1-broccoli";
export const id="dl_22bbf55496c4491d8be8";
export const url=new URL("../icons/lucid_1-broccoli.svg?v=5a91031ddca0d0a708fe7bb556e625f7907f5ea746bc8ab71d1ea1073124fa29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

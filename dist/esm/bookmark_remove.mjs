export const name="bookmark_remove";
export const id="dl_caf313b5b29c68cdb860";
export const url=new URL("../icons/bookmark_remove.svg?v=96915eaf825b6cbb8d4e7539cc1ed54c4b4fb48681fd584ffec6b3aed284fd09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

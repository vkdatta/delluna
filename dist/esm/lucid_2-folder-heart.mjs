export const name="lucid_2-folder-heart";
export const id="dl_1f4ecb58d6f34d62a8b9";
export const url=new URL("../icons/lucid_2-folder-heart.svg?v=30e8770695715001de8a84077f5df60bb70956f456a01643286338b17b15933a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

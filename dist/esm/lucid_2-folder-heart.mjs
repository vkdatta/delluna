export const name="lucid_2-folder-heart";
export const id="dl_1f4ecb58d6f34d62a8b9";
export const url=new URL("../icons/lucid_2-folder-heart.svg?v=051bddee1f9d8041efce021d7ffbf71e2aee6590eaf32329d5b5f4e52d739f52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

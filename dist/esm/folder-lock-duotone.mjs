export const name="folder-lock-duotone";
export const id="dl_f0d2ca8fe34d40058823";
export const url=new URL("../icons/folder-lock-duotone.svg?v=15891112470ad76827acfeae7413c73131589dec6974e6fb421850763d505b51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

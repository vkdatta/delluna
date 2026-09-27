export const name="lucid_3-percent";
export const id="dl_4904ed2b7ee04480851e";
export const url=new URL("../icons/lucid_3-percent.svg?v=d5605fe176b885317d9527872ee7807582eca4a4ee4373c95c38ff3246c04ba2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

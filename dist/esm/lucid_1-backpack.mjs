export const name="lucid_1-backpack";
export const id="dl_3f81dc893ee748a7b856";
export const url=new URL("../icons/lucid_1-backpack.svg?v=7bfb130f74d5221ac99a6440ab398e575bc5869cf6e233cb8814de333a1f563c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

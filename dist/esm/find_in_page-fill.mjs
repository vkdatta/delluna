export const name="find_in_page-fill";
export const id="dl_ead0f738f9b54efca787";
export const url=new URL("../icons/find_in_page-fill.svg?v=72c24bf2dadc9f6427c462b5d54fa1927a336759832fde00b272a7a6e9ebf399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

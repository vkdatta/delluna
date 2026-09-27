export const name="lucid_2-heading-6";
export const id="dl_1f9d79e21a2d440ba7be";
export const url=new URL("../icons/lucid_2-heading-6.svg?v=f50888b8bf167e508ec67e13425db9b81595b61976b4d3a2d5667447ee6fcd83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="mobile_layout-fill";
export const id="dl_d23ba2f4cd47774cdabc";
export const url=new URL("../icons/mobile_layout-fill.svg?v=0e7030b56e88456ca9dd0f4ea4e55d4fdd1aab51e3cabc495a5364a48a945666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="list_alt_add-fill";
export const id="dl_f15c0c6d641042b4571b";
export const url=new URL("../icons/list_alt_add-fill.svg?v=54eabbdda9294a1f9a4c9dd21f6e2c25d9ae6d303db6aca42d462746e7f66b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

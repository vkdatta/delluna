export const name="user-circle-gear-duotone";
export const id="dl_20018eac857c43e45563";
export const url=new URL("../icons/user-circle-gear-duotone.svg?v=f9ae014b1725e2cce8f8c88b046bcfdce5ede14d70f861e7ce8f8782c0a313fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

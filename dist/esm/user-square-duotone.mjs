export const name="user-square-duotone";
export const id="dl_397e9f232ca1339b8972";
export const url=new URL("../icons/user-square-duotone.svg?v=b5d35ebcaf850c0a5dd22d5883e5334716425e57fba1b2e4f5b7dd91ea61241b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

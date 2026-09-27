export const name="verified_user-fill";
export const id="dl_eea1e5ca4c61aabf1e8a";
export const url=new URL("../icons/verified_user-fill.svg?v=08bda869e086809ff20499ad0f321be98388b8da2c8cf8cc98d40b7426ff5334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

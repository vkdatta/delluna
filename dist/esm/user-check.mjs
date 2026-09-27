export const name="user-check";
export const id="dl_fe09996d766dd2ec4b63";
export const url=new URL("../icons/user-check.svg?v=0f2a6fedccdf701ccaa746cf934ca0ea8956f045580e4bbeecf78230f2113374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

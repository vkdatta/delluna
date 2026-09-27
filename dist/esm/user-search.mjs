export const name="user-search";
export const id="dl_65af48716e4d4995b663";
export const url=new URL("../icons/user-search.svg?v=db0daed9f79450f92a8acf24e9d69914ad4495a86f26760f8126def242c1905b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

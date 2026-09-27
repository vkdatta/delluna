export const name="user-search";
export const id="dl_65af48716e4d4995b663";
export const url=new URL("../icons/user-search.svg?v=9e0f906d6e23a5e343d312502063b445e9a3925c9952cb16b588d5a25e20cc07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

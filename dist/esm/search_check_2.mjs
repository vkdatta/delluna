export const name="search_check_2";
export const id="dl_145e303ff11485a24179";
export const url=new URL("../icons/search_check_2.svg?v=d5420244fef28e9f97b9539c6e3da6ed1426fd35aa40930a96d34fab9a37227f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

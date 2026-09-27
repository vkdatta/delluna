export const name="filter_list-fill";
export const id="dl_a72333b7a25ebad9ed62";
export const url=new URL("../icons/filter_list-fill.svg?v=0a8bd1771d76f6d15a5c93e9136eee8df3e699257816e5262c033dabb28b8833",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

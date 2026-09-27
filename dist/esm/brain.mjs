export const name="brain";
export const id="dl_159cb819888b4d178699";
export const url=new URL("../icons/brain.svg?v=e8a41f4f317e6f28af8813b1d87c1590976895a75f37e29dbddd43169d7c1791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

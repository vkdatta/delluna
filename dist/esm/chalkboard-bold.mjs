export const name="chalkboard-bold";
export const id="dl_fa23dc4e5cd74333b5a0";
export const url=new URL("../icons/chalkboard-bold.svg?v=85e92c3562614574c32cdeb40103453e5a96749910ff8c1524c1fe47a836db72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

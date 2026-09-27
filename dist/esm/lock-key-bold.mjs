export const name="lock-key-bold";
export const id="dl_b516c1ce1bcb4e72ba43";
export const url=new URL("../icons/lock-key-bold.svg?v=af046e06fa90533002c92c746424d5b818f500ecce9792a7b698312f22b349eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

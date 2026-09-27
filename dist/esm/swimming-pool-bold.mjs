export const name="swimming-pool-bold";
export const id="dl_adbf6df84b4c0f81fcd2";
export const url=new URL("../icons/swimming-pool-bold.svg?v=87ab1f17fdb277a58bfe8f429c8658fe5116ff3b3778a87fefb0c9163f02a999",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

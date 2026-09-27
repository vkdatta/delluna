export const name="list-checks-fill";
export const id="dl_dccadb40aa7b49b196e8";
export const url=new URL("../icons/list-checks-fill.svg?v=5c1546d6a9f11dcb4b2ee2c6a7290d52d6da576f867c885a6c5a7dda666644b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

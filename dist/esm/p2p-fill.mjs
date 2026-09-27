export const name="p2p-fill";
export const id="dl_aebd45a27552834b9870";
export const url=new URL("../icons/p2p-fill.svg?v=44b1efcdbcabc74f73277360c0dc136c2e372e0b16db902de55d7ef1da5c7b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

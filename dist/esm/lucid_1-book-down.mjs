export const name="lucid_1-book-down";
export const id="dl_3d11390ebfcb49af8079";
export const url=new URL("../icons/lucid_1-book-down.svg?v=0472c9a219b7504f946b7bb6670242b70e73731424bdaa60dd006355177d0036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

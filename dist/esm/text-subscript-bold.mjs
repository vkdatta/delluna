export const name="text-subscript-bold";
export const id="dl_050f5cbb7d7f1ddadd57";
export const url=new URL("../icons/text-subscript-bold.svg?v=b8c7755403b56a2a5d1a55ae7a4cbfa3df6cc6218492abede96c61b9720c62b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

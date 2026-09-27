export const name="home_storage-fill";
export const id="dl_1724f3ac466273b1f561";
export const url=new URL("../icons/home_storage-fill.svg?v=465832483c2f02adea4b5cfdd0667cc2752213b0e0e99bb2b83a4081a2ec66eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

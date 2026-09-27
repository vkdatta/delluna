export const name="zoom_in-fill";
export const id="dl_59ed64b5554ba3bc5407";
export const url=new URL("../icons/zoom_in-fill.svg?v=ebc3882a91617dc94cbd1471c85c7d1bcf219e64fb0b45816230e2be73c93386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="visor-bold";
export const id="dl_6c642e57a10646788d6d";
export const url=new URL("../icons/V/visor-bold.svg?v=6a7c26183d91941bb764326a09fbbf3550e23d8ea0fd5a9ef11a91a1786f71e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

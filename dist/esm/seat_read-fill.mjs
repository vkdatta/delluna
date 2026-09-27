export const name="seat_read-fill";
export const id="dl_850a906a1e48ccbe8f5e";
export const url=new URL("../icons/seat_read-fill.svg?v=605aabf16127bf7e43faf4ee942f92d9657e60b0e539075b3ca41d5f4c8cbaf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

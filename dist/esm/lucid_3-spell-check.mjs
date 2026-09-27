export const name="lucid_3-spell-check";
export const id="dl_ea6fec624314414d87c8";
export const url=new URL("../icons/lucid_3-spell-check.svg?v=c6bd0259b6f38d9242b709c69412ac926c6935738797d721c6b237c61a91c427",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

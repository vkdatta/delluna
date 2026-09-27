export const name="coin-bold";
export const id="dl_3bb050bbc1cb41d48a93";
export const url=new URL("../icons/coin-bold.svg?v=ebf8818153a64b2201340c643d7d7c433841362e8db926d34012a114e0acbe3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="money-wavy-fill";
export const id="dl_d0e3c34cdc8b41f8b0e1";
export const url=new URL("../icons/money-wavy-fill.svg?v=0e49fc84ac8e4bccc0bcdcc5cf015ad190044ff43ae12cc50dedd2ffca4f475e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

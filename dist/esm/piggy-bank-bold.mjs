export const name="piggy-bank-bold";
export const id="dl_00ce51898a91468eb824";
export const url=new URL("../icons/piggy-bank-bold.svg?v=c5bb67e3b7fd82f28327b64d225d9f838b5346f20586be4ff3b30f59cf2561a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

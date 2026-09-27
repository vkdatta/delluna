export const name="taunt-fill";
export const id="dl_7c9bca19a107d9f8ddb5";
export const url=new URL("../icons/taunt-fill.svg?v=6322239da35344a28cffe01cc04766eb54da02cf6033fa5d5bdb19e7f9865b6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="bag-bold";
export const id="dl_e3c0b9aef9cf404bb237";
export const url=new URL("../icons/bag-bold.svg?v=d4e7a18508ffe4baef8d0892ca920e657e1e916d27445c420183720f7d03f4bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

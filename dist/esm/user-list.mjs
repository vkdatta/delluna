export const name="user-list";
export const id="dl_ef00f27ae72a61b1293f";
export const url=new URL("../icons/user-list.svg?v=5138a3076fa38beb8827b5c2e6ed321bf0793957fe4b23beffef1462003ab46f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

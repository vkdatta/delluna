export const name="tabs";
export const id="dl_561dfac2ffd7b8fd4aec";
export const url=new URL("../icons/tabs.svg?v=08f9ae947354a6eee8be20d6cf0572249a56b9de6f5dbe2d99a91ff6f994064f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

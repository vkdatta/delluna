export const name="coins";
export const id="dl_d048e7b93bb347ed98eb";
export const url=new URL("../icons/coins.svg?v=acefcdd32e0a5d56d0121967910aba2a1f946eaf57da24ff9a3fb92ad369e57e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

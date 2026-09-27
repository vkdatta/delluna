export const name="laptop_chromebook";
export const id="dl_c266d7a9642ff7535fa0";
export const url=new URL("../icons/laptop_chromebook.svg?v=5f3624cfe01bc87d321185ebdb1d6499e22bf930ce05e506d4fba6a4b88f8e7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

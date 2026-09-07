export const name="shovel";
export const id="dl_eebaa4abf7b24acf8e90";
export const url=new URL("../icons/S/shovel.svg?v=31f13fbe32e880ef2bc30093b6bcd4ed809129991efb1d4935591f9d7edb71e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

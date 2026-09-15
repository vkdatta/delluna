export const name="cottage";
export const id="dl_faf290135d7e4c93908a";
export const url=new URL("../icons/C/cottage.svg?v=e3ef43a5ea20e7986acc9ba72fa84077aaabfd38b9dd71585362ca5c887fac7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

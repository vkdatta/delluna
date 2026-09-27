export const name="money-wavy";
export const id="dl_ec04d68d037b4ea19f78";
export const url=new URL("../icons/money-wavy.svg?v=fb92183b84d9a50509bbe2141585e6afd925acf1cb3adcc0573d747c24cbd3f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

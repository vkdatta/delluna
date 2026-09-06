export const name="bowl-food-bold";
export const id="dl_30d59260959948789436";
export const url=new URL("../icons/bowl-food-bold.svg?v=af38ebd7e80babd7c24ead5bf4f5110debcb59506911aef312aaf73cb74c64a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="gender-intersex-bold";
export const id="dl_8ff4f94aabf34ad4ac0b";
export const url=new URL("../icons/gender-intersex-bold.svg?v=9e5a929f5ce5dc0dcf678fbbb8998af9ab2fda0a208b036380730d61e7baac6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

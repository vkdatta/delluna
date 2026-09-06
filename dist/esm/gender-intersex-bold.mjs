export const name="gender-intersex-bold";
export const id="dl_8ff4f94aabf34ad4ac0b";
export const url=new URL("../icons/gender-intersex-bold.svg?v=37d67e43f23e2116c872590778a8dcf6ccd7daa318015320be05b3037e079611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

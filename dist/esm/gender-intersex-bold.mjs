export const name="gender-intersex-bold";
export const id="dl_8ff4f94aabf34ad4ac0b";
export const url=new URL("../icons/gender-intersex-bold.svg?v=fd924ed040f5b460c2884bb9bd264c540b6b20f24308e729e19365d09d2e9dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

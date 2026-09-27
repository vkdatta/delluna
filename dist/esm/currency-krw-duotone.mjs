export const name="currency-krw-duotone";
export const id="dl_0e7bbf5ff0404fc38c1b";
export const url=new URL("../icons/currency-krw-duotone.svg?v=9b2acd172f0ff843e6de178f15e2b9be488f8d10fe50f32974619e2fec2de0b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

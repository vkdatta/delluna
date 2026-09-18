export const name="looks_5";
export const id="dl_74cb8ff1dca84ce88bfc";
export const url=new URL("../icons/L/looks_5.svg?v=d95ae96cbc28eee73ca901dd42baec8484a0e5ac21ab417a8f08ad1b7ab6fb13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

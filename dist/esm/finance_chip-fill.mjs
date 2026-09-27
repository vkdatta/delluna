export const name="finance_chip-fill";
export const id="dl_421bb7437f72f6031294";
export const url=new URL("../icons/finance_chip-fill.svg?v=c2d983465e98b07399aeabdae5492ff9b249e9720f05461b5878f758b6571ed3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

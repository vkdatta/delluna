export const name="contract-fill";
export const id="dl_8b2ed35227804b708de7";
export const url=new URL("../icons/C/contract-fill.svg?v=d2754ba9cb6ba9ab826438aab0b29e1ced5878ff7bbeea23223d134866066b5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

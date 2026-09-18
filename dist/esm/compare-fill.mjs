export const name="compare-fill";
export const id="dl_fa76d980f449476aa4a5";
export const url=new URL("../icons/compare-fill.svg?v=fb035d93ec09a00820ea86dcb95bb4f7d4ec53585a8226b69ad7382bc0ef3c05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

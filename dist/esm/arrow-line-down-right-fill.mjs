export const name="arrow-line-down-right-fill";
export const id="dl_237040bc6ce74cc6ac22";
export const url=new URL("../icons/arrow-line-down-right-fill.svg?v=bb4c493cca566500fca409ef46c62d8d1f85602684f975514514786eca7813a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

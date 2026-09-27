export const name="caret-right-bold";
export const id="dl_c1fa855f6b58464a97de";
export const url=new URL("../icons/caret-right-bold.svg?v=0ee2dfb1a4ead92ca911bc807c4a98cc44c6cbb2572a496978f470231e7c5041",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="bottom_sheets-fill";
export const id="dl_04b56abc29165065b93e";
export const url=new URL("../icons/bottom_sheets-fill.svg?v=a9f8363b943d7c20b550bcb1daa9e199a6d7f6422f2eec7bbe936fe046fb27dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

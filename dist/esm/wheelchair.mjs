export const name="wheelchair";
export const id="dl_fa80aa774d7768a2fa4e";
export const url=new URL("../icons/wheelchair.svg?v=b1d3952250fa47e2a78684b056e6c5e714fc7b00bfc9b922ec3473eb911033b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

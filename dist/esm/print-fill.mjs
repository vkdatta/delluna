export const name="print-fill";
export const id="dl_f6c296bf4327943a94c9";
export const url=new URL("../icons/print-fill.svg?v=a372c0d46f0b652d8173b60ef91144310d543e762b9567721d3090651986b92e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

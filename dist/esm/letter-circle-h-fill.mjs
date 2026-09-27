export const name="letter-circle-h-fill";
export const id="dl_c18eb78ebc0248bc8895";
export const url=new URL("../icons/letter-circle-h-fill.svg?v=01aa1cdc935682f6b8172482859e0ebb02ad37251e2a53e7bce319234bd0101f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

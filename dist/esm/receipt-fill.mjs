export const name="receipt-fill";
export const id="dl_6d5cdc20785840b59284";
export const url=new URL("../icons/receipt-fill.svg?v=c8ea3afaa7142f69d8b40ee939390b34ef85c10dd932820bd5f145c6ccccba9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

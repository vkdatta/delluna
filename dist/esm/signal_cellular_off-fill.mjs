export const name="signal_cellular_off-fill";
export const id="dl_60f433f20ddb6d095666";
export const url=new URL("../icons/signal_cellular_off-fill.svg?v=6087d7302808c18a4ebe98745e99bc4b0c1721a62169ff509d8cf1500a04a5d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

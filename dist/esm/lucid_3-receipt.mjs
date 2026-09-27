export const name="lucid_3-receipt";
export const id="dl_509c6664f36c44ac84df";
export const url=new URL("../icons/lucid_3-receipt.svg?v=b060f81bb865bf8b06aedde9f06dcfef6062841be6d446d9255fb9a8fec143d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

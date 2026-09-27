export const name="stack-minus-fill";
export const id="dl_1b551f6eca3b01369a91";
export const url=new URL("../icons/stack-minus-fill.svg?v=155eed50d8e8448f81cc0e71edd10db5c7823a080807a44c34a5b6340237bf9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

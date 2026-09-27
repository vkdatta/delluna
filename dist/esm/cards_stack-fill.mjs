export const name="cards_stack-fill";
export const id="dl_22601b207c6be149a1d8";
export const url=new URL("../icons/cards_stack-fill.svg?v=bba31590cdb5c53fd1c6e11e97f322fde928f6c4b274382f9420f22198ea766b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="flow-arrow";
export const id="dl_a9eadf45b2b44b5fb33f";
export const url=new URL("../icons/flow-arrow.svg?v=d6b5ac27e877188aa6b1cef54ea175d7435cdac5af9723d00b527a8d93bc7bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

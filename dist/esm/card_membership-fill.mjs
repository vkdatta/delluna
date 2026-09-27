export const name="card_membership-fill";
export const id="dl_255cdf8b3e4579fa61df";
export const url=new URL("../icons/card_membership-fill.svg?v=223041b33049ce2fb2be6e426cfe96ff442b30e4bfe7ffa45da0825ce7dfeb2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="brunch_dining-fill";
export const id="dl_a4498a425b7b58d5c87f";
export const url=new URL("../icons/brunch_dining-fill.svg?v=5b3608146af213c0f838c549a0ea3c2135d2f46cec7a71035ac912741fcf8c31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

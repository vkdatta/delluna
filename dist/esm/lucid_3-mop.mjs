export const name="lucid_3-mop";
export const id="dl_0d28d2e1ebb840adae66";
export const url=new URL("../icons/lucid_3-mop.svg?v=eedb98f6321b1dae5b8d6f883a1857814fb83421657bf6c9947611c55ddfa987",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

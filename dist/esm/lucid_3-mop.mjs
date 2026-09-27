export const name="lucid_3-mop";
export const id="dl_0d28d2e1ebb840adae66";
export const url=new URL("../icons/lucid_3-mop.svg?v=47c2da7e273a852cce08367ab5654194d968caf2ca62a2283ade084589e76380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

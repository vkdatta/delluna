export const name="smiley-melting-fill";
export const id="dl_faa607e87f78c50a52d1";
export const url=new URL("../icons/smiley-melting-fill.svg?v=b659dc44c17b3a42a4492475b2894346e7fb5a7bea5cf6b731515fdb44d61caf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

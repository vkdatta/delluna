export const name="lucid_3-pointer";
export const id="dl_c132183939674944a435";
export const url=new URL("../icons/lucid_3-pointer.svg?v=0ec43d5c986b0846b1782bfde1cd19df81104a9bea6c76cf732d4d44534c2a5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

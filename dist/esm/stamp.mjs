export const name="stamp";
export const id="dl_0ccdf4ce1208473a90b4";
export const url=new URL("../icons/stamp.svg?v=7a2e64431a4150d2f9229594469a824ecdbe5c06abb1c841ccd53fe962ad56b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

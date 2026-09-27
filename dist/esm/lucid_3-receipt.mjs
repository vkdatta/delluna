export const name="lucid_3-receipt";
export const id="dl_509c6664f36c44ac84df";
export const url=new URL("../icons/lucid_3-receipt.svg?v=56aa0f590f38e6fba39cc1dde1996ae814c81d81b58856d9bd99b89778f30bed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

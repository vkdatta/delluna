export const name="print";
export const id="dl_d6a2e6d6d6c6bce6f953";
export const url=new URL("../icons/print.svg?v=7b2b627177e857986301ec3fff425464574431032c6ee0ba9c804144301a9456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

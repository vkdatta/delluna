export const name="local_shipping-fill";
export const id="dl_124cca1f63c336c3592e";
export const url=new URL("../icons/local_shipping-fill.svg?v=edd5aeb4703fe5d62dd677f04d6b31a5f8a377b1484d1bdcc5400652c247aa2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

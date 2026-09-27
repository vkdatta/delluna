export const name="lucid_2-credit-card-plus";
export const id="dl_5422a69129ff47f0a937";
export const url=new URL("../icons/lucid_2-credit-card-plus.svg?v=5597e74eef0cf899a15082f8239c73d8626d43799845989bd00a25c8480649da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

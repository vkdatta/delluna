export const name="sledding-fill";
export const id="dl_c0e37ed187a22a07c480";
export const url=new URL("../icons/sledding-fill.svg?v=6c03a9e9a7861d36f64b5672bad57bd42a143d2cb5bc59c91fdadefe902c98c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

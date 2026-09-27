export const name="stripe-logo-fill";
export const id="dl_b1a8f9b49ce39273ddf3";
export const url=new URL("../icons/stripe-logo-fill.svg?v=161caaf4e568f35a89c017d3cbc9327876263de7c0ad82f1c937ccefa5237658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

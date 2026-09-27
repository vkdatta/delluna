export const name="macro_auto";
export const id="dl_1379e9d9e376a529048d";
export const url=new URL("../icons/macro_auto.svg?v=552e5cffcc4f40e6ed6ba263ce2e4939bfe06250972cad8902b2c39b7e36f042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

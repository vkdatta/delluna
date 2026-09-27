export const name="regular_expression";
export const id="dl_4469d407b6dd8bb2b748";
export const url=new URL("../icons/regular_expression.svg?v=232e3c28dc2ae7e0f468d4663c0e719b0e4e162574aae39c01d75a0a731900d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

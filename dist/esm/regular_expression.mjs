export const name="regular_expression";
export const id="dl_4469d407b6dd8bb2b748";
export const url=new URL("../icons/regular_expression.svg?v=c50d4444b240a2b9bf8bdf3fb76b1358d0d8eadb90eabd7962f6ce9bcb1dec4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

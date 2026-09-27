export const name="format_quote_off-fill";
export const id="dl_89557da272e808d28508";
export const url=new URL("../icons/format_quote_off-fill.svg?v=4b147a5ad27f25d741ddb99877494fb2c42f97d68a1b72cb66d728e5ff7997db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

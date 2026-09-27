export const name="fire-simple";
export const id="dl_72e795ea7461450ba9cc";
export const url=new URL("../icons/fire-simple.svg?v=bc373ec96919a893cb4b0c0d28d3efcfe9acc76bb9a76a746c9fa189a5933172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

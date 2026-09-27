export const name="lucid_1-bath";
export const id="dl_02f474327e0c46dc8672";
export const url=new URL("../icons/lucid_1-bath.svg?v=2ce44135836184e8ca5e0349a7d17ec3807befc02b7daeb3cca26131dc8f025a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

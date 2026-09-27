export const name="format_quote-fill";
export const id="dl_4e51ab5f4c990234de47";
export const url=new URL("../icons/format_quote-fill.svg?v=4e9a383b9b0a5694509ac5946f0a85cca95f890ba5e294edc8ac8490520f4603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

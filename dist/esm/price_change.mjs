export const name="price_change";
export const id="dl_757264b2aec5264ef91f";
export const url=new URL("../icons/price_change.svg?v=295b7deae144bb98d91a2089765ffdb16f72a1f344c439bab3f9e3217c9cc0a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="trolley-suitcase-fill";
export const id="dl_4c6b987b30722d8bb7aa";
export const url=new URL("../icons/trolley-suitcase-fill.svg?v=d079e81007cd4f37070eb5454d06577abaab7c24f3f4d54ccc8f29f1660f9ae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

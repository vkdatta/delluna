export const name="lucid_2-list";
export const id="dl_f492596abb5b45e79e87";
export const url=new URL("../icons/lucid_2-list.svg?v=5c885491f2fbdfa55c9f498bd22a82a83945910e7386d2218b40708788e650c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

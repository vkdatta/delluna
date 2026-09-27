export const name="check-circle";
export const id="dl_8b5ad650902049c5ba57";
export const url=new URL("../icons/check-circle.svg?v=a04cff95c55cc0f3ec6457ef44b4bbe2247d418be53ead71f68cfce464dd1abe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

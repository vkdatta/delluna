export const name="unite-square-duotone";
export const id="dl_c750f7c279f218febcae";
export const url=new URL("../icons/unite-square-duotone.svg?v=8a1a364520de8fecc8a6b13f2761907ab8bced75848ae06f04e1e88fd0e66372",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

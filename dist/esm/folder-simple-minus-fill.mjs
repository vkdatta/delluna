export const name="folder-simple-minus-fill";
export const id="dl_e7ccba98752a4cbb8200";
export const url=new URL("../icons/folder-simple-minus-fill.svg?v=ff66ab7f203f3e17f37363c16dacb90b72b251b49c5e285cd6fbe20cbaab26d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

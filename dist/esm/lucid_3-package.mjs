export const name="lucid_3-package";
export const id="dl_7c9a0625c7764692a50a";
export const url=new URL("../icons/lucid_3-package.svg?v=a59c16b12eba7efc9110ac88a78d5011d500c4fdcec36ce66e681655e4e8d596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

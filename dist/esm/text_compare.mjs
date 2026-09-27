export const name="text_compare";
export const id="dl_f6fc4ec6b8e05bcfcf4d";
export const url=new URL("../icons/text_compare.svg?v=a71ac554265af2583144167e9a9a87508a5cbceedf54b58036474e0c1b9aa62c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

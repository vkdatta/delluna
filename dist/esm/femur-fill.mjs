export const name="femur-fill";
export const id="dl_2893c3767c3056bb9c76";
export const url=new URL("../icons/femur-fill.svg?v=0e423b468de57723655c726f9e95a68fcb56a24d54be432a62449851ebba803e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

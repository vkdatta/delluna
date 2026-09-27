export const name="suitcase";
export const id="dl_a8b580b8fdcebe0c227d";
export const url=new URL("../icons/suitcase.svg?v=ce9e56357312ff7aee7ebd862dca1ee1dcca9b92254a4778eaf0d49a3560f0ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

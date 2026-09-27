export const name="bowl-food-light";
export const id="dl_49fed28380834d08b42a";
export const url=new URL("../icons/bowl-food-light.svg?v=bf802c8ab4e376b9b84ca9743b6c5ccb034ed7b373ca7912e36544d383c85a49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

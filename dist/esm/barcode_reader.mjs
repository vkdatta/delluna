export const name="barcode_reader";
export const id="dl_0f5eca5eff0fe03bdd36";
export const url=new URL("../icons/barcode_reader.svg?v=9b62024130e7b32eb65adb49dafd91506f5d1a5cc93b54d2a0bd08856f9683ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

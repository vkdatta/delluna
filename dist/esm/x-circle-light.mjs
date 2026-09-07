export const name="x-circle-light";
export const id="dl_8d5309e1cd00418295f7";
export const url=new URL("../icons/X/x-circle-light.svg?v=76073e849fc66f057683732bd5426361b5f2ce9de3a6b26c81ee12ad35343e09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

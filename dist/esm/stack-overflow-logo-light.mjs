export const name="stack-overflow-logo-light";
export const id="dl_6ccae7f71c324d01bf0e";
export const url=new URL("../icons/S/stack-overflow-logo-light.svg?v=e8fd71603ce17af4a20770d13901097a6a5a1d49793b006f4d2d6c95fe671832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

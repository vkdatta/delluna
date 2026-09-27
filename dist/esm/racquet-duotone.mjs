export const name="racquet-duotone";
export const id="dl_87bbb94eefc847e49add";
export const url=new URL("../icons/racquet-duotone.svg?v=779252e0af6ce8d70b617828f9f8ecb549ff91f364b0c7869831010751156b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

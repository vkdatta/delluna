export const name="cross-duotone";
export const id="dl_c3adbfbc9094406a80d4";
export const url=new URL("../icons/cross-duotone.svg?v=8282983bdc4f934cb357631b78274a228d1b34c74875264d25e6c0fbd193c641",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="dataset_linked-fill";
export const id="dl_d79d1038c594a71e24bc";
export const url=new URL("../icons/dataset_linked-fill.svg?v=859d511fcb000dae823c69797e7766b0343a80d190a426b95c2b8dcdafc85c47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

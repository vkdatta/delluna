export const name="oncology";
export const id="dl_89e49d1e5bbc44e485bc";
export const url=new URL("../icons/oncology.svg?v=1775c41058b209a1ac9c4f8ce2c8ff46d5f9201ace401914e5d4b28e07c199ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

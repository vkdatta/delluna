export const name="no_photography";
export const id="dl_86596d96ae38ae940001";
export const url=new URL("../icons/no_photography.svg?v=6e922b29af08d08c4e37b72e8a3e24947e3a08ee7bebec3e039179d64c7660c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

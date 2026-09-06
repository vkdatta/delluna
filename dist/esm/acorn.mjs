export const name="acorn";
export const id="dl_1dadcb4d660e490cb9ed";
export const url=new URL("../icons/acorn.svg?v=0634e19663bd8f89fe7a5f8959d9ab64c50261b668cdb78071d3e55b5cbc58a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

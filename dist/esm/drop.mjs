export const name="drop";
export const id="dl_62fb8c23847f42c4995f";
export const url=new URL("../icons/drop.svg?v=18bc97450d58d7affd15ec4060e89fe138d912aeaa22fe7dbb526af5fcc81d0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

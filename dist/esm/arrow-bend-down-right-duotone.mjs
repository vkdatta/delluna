export const name="arrow-bend-down-right-duotone";
export const id="dl_aa85fdda2eb04401ad97";
export const url=new URL("../icons/arrow-bend-down-right-duotone.svg?v=3c34ebb3cd99c6d3a8e3c6b4990672de7ea2202daf1800a6972a192d97f5fa92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

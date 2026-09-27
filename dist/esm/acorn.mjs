export const name="acorn";
export const id="dl_1dadcb4d660e490cb9ed";
export const url=new URL("../icons/acorn.svg?v=1ca95812633d4c8367f871b35c342ce3b380680945943fb0dbe331aa0be409bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

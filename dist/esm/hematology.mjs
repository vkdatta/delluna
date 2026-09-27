export const name="hematology";
export const id="dl_821049c5d9ae2026574c";
export const url=new URL("../icons/hematology.svg?v=f2dae9458baa44d15e1ffe7b34938a09221e84bdce8870dad75355061ad4252a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

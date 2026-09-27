export const name="lucid_2-gavel";
export const id="dl_5117c2d58a5c4cdc8485";
export const url=new URL("../icons/lucid_2-gavel.svg?v=1134e15766eb33c16b65731e78bc2e13db47b01e0817a1ff3f1244ca12bab032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

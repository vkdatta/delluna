export const name="tree-palm-duotone";
export const id="dl_f535d39b888b4bf6b298";
export const url=new URL("../icons/T/tree-palm-duotone.svg?v=03397569439a750fe8a025192d614e2aee36c1058657c031ece4f152df7ca1a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

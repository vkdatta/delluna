export const name="gender-male";
export const id="dl_4f1dacb587e148e3896e";
export const url=new URL("../icons/gender-male.svg?v=a4843ab6eb67c3d6a89244f77f61660d491c02ce12885f3b4f6355301bfbc856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

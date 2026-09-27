export const name="number-square-six-duotone";
export const id="dl_c6f3119cb1984b03828d";
export const url=new URL("../icons/number-square-six-duotone.svg?v=31065d95cda55691701bfa4510890437869b87ffc14667c02571d128c3ec618e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

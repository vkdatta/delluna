export const name="swap";
export const id="dl_3800c5e28f6625a9a139";
export const url=new URL("../icons/swap.svg?v=8d9a481c5042552cede51fff91e460bba77b466da65e326a51f7247de857fd28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="asclepius-duotone";
export const id="dl_c188202c88b44549bb34";
export const url=new URL("../icons/asclepius-duotone.svg?v=d3b6a5d5e8780acbf8fcc3afd855924a1531eada255417a2081ec5c56606688c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

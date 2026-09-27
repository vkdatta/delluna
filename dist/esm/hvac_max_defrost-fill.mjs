export const name="hvac_max_defrost-fill";
export const id="dl_26f92ea70dd29ced7af7";
export const url=new URL("../icons/hvac_max_defrost-fill.svg?v=a0f181b4581c7601578228917646f15349bbe466094820b1de366a2251d371ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

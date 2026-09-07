export const name="brain-duotone";
export const id="dl_02aec42eab8745a5beca";
export const url=new URL("../icons/brain-duotone.svg?v=21c4456e71486b819599cc5feecde1451dc172c82f40ae10f8469f434567979b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

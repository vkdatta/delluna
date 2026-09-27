export const name="building-apartment-duotone";
export const id="dl_f17670e1285344e1b3de";
export const url=new URL("../icons/building-apartment-duotone.svg?v=86971cd01b0cdbe3cad6e595472be3b49882944f37552fd3d8d03bbef1412962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

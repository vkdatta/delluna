export const name="neurology-fill";
export const id="dl_ec01ae15d7b84ef917f8";
export const url=new URL("../icons/neurology-fill.svg?v=ae11a4de3e139f12a59a0cf5208127ef2c223fd9e515ae8bb71b2c18133a2521",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

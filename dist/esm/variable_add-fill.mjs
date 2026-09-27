export const name="variable_add-fill";
export const id="dl_564597d7df92d44de53f";
export const url=new URL("../icons/variable_add-fill.svg?v=33173e77090a7c55b7fb4d6085af84c3094c397209ff4ae6857eeb936535cad9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

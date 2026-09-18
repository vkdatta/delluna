export const name="hvac_max_defrost-fill";
export const id="dl_d5070c2f528349da9e13";
export const url=new URL("../icons/H/hvac_max_defrost-fill.svg?v=16299c178a7db8005264b536f763840740d78d647ded600e9448a6e968ec709e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

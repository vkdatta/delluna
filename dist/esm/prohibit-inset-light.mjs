export const name="prohibit-inset-light";
export const id="dl_38682064ac0d42058d54";
export const url=new URL("../icons/prohibit-inset-light.svg?v=2a7cfd379afb6d156992323d79da77dd5d4421350ac1b572a16a1ebf2f69aec6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

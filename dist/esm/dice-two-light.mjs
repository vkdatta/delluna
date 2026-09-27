export const name="dice-two-light";
export const id="dl_3a4ad1cad61048d29ca4";
export const url=new URL("../icons/dice-two-light.svg?v=fde7a2ebff05caf34ec3540cdf6f4eff163b8bd4383be4e77fb6ccdc29d6cdcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

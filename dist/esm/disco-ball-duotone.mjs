export const name="disco-ball-duotone";
export const id="dl_d018b879ee4b4e309154";
export const url=new URL("../icons/disco-ball-duotone.svg?v=3435d22655e41ee04d03e651989726b85e011ad7654d2ac75877bc3c85295b89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

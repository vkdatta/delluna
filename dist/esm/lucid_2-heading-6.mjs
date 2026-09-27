export const name="lucid_2-heading-6";
export const id="dl_1f9d79e21a2d440ba7be";
export const url=new URL("../icons/lucid_2-heading-6.svg?v=40f03474a54ad696069a9762125f73df19473ea938b6b6cbed4a65730d519b67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

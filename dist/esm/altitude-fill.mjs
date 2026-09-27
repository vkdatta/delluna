export const name="altitude-fill";
export const id="dl_e8b3c18952a10c233f3c";
export const url=new URL("../icons/altitude-fill.svg?v=6e69df37be2d16d82df89dcdccd591561fce7eb38ef022f0dd804141fc6cb06d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

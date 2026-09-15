export const name="bath_soak";
export const id="dl_4200c71a17894205a2b4";
export const url=new URL("../icons/B/bath_soak.svg?v=35b2d5f86dbf8d91df798edc61dffda964749f391355141f8c5521901d8062e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

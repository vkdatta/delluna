export const name="zone_person_idle-fill";
export const id="dl_d56baaba87934f88bc2b";
export const url=new URL("../icons/zone_person_idle-fill.svg?v=cc3686284794bdc441b1e6540f898969170e0f6506cebb1da676ee03d2dd9c2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

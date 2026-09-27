export const name="lucid_1-calendar-check";
export const id="dl_fdf3cddc1782485f8ec3";
export const url=new URL("../icons/lucid_1-calendar-check.svg?v=aff21a2841fca3802ff80c5b801d6b2fb9e8b4d4e31b570ef665290234c472ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

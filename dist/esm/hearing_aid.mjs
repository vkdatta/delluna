export const name="hearing_aid";
export const id="dl_60e68cdd74d00083d542";
export const url=new URL("../icons/hearing_aid.svg?v=f95866bb5923858df50c957c5853158a8a6229830ea9a82e993871a84ecc9c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

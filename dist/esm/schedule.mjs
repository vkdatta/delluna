export const name="schedule";
export const id="dl_e03b8526382a2d464ac2";
export const url=new URL("../icons/schedule.svg?v=2e0be6b7a2000751c3efa4edd33fce493d8bd899766251ad58294262ce0840b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

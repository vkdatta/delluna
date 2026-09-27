export const name="travel_luggage_and_bags-fill";
export const id="dl_a5bbd47c33e99e1bae87";
export const url=new URL("../icons/travel_luggage_and_bags-fill.svg?v=e6df8ce081539380e654394ea1d78675a51bfd114bba4a635a3eedf660c87815",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

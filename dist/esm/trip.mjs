export const name="trip";
export const id="dl_2f90108f685c658eda46";
export const url=new URL("../icons/trip.svg?v=aca552dd0e243a9effb6ac8b1883fc20ba2e3b9bd07fd9c984fea553651cf523",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

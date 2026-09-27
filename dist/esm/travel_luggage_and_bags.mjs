export const name="travel_luggage_and_bags";
export const id="dl_02620ba40d7af415a889";
export const url=new URL("../icons/travel_luggage_and_bags.svg?v=b73ec1018b869bed99b62b843bf6b3dcfaff6cdff7e496cc1d5448669c1b4af8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

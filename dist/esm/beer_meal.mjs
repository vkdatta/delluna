export const name="beer_meal";
export const id="dl_5f12c154cc155d7b877d";
export const url=new URL("../icons/beer_meal.svg?v=b6ebb20b87155606790f069e480d4580cb24673d65885e0c91aecc21e7b20e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

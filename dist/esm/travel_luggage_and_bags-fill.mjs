export const name="travel_luggage_and_bags-fill";
export const id="dl_ff69ee11b4e382b6248d";
export const url=new URL("../icons/travel_luggage_and_bags-fill.svg?v=1cc3d4438971d9bd305dcef676f796b70384d489e096b109ef382f45883298f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="bike_lane-fill";
export const id="dl_bb1171d6117984cda791";
export const url=new URL("../icons/bike_lane-fill.svg?v=be46b48febd2ee27d28affb6be61c4fc67ea57b0411f384206e9066e0748dfcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

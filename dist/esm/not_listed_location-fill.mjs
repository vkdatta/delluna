export const name="not_listed_location-fill";
export const id="dl_b2d4cb31c5a9690abd66";
export const url=new URL("../icons/not_listed_location-fill.svg?v=fa4a092d3299ccafb4dc4705bebc019b08b1d604842ced55bb6286acc54ac89e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

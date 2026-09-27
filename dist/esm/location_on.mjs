export const name="location_on";
export const id="dl_2615903e45493674ef72";
export const url=new URL("../icons/location_on.svg?v=7af7faba899a3a15f94500eaf2827d50efed68b4a1a9d353b8ec763c35a08dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="globe-simple-fill";
export const id="dl_2c069e10cf024bda87fb";
export const url=new URL("../icons/globe-simple-fill.svg?v=dda5b2980ccf95cc9a6caca5d41af967eaa97f077ddff237280db3280df5b83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

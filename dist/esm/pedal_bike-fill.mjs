export const name="pedal_bike-fill";
export const id="dl_be656316f210f33a9867";
export const url=new URL("../icons/pedal_bike-fill.svg?v=f9fd6004e37f24fd2fc4fd46ae1a3ccaa50f55ad8af955697ad2df6b2414624d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

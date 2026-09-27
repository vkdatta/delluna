export const name="directions_bike";
export const id="dl_1478b9dceb3151d6f5b1";
export const url=new URL("../icons/directions_bike.svg?v=a09ab980b561d59980636e90fb12e8525018c9b4ed8b2b9296baa22c5cd42a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

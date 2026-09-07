export const name="seat";
export const id="dl_955679435f8140db9eda";
export const url=new URL("../icons/S/seat.svg?v=5ce26c4882a03e838072390a52f8f1ab709d0d364de4df8fb788986f413c7ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

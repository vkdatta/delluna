export const name="calendar-star-bold";
export const id="dl_c4c5206c9b7d4aa2a7c4";
export const url=new URL("../icons/calendar-star-bold.svg?v=56598a4ebb49a7d40ceb6cc7cabd96036a250426a50ac20d282a81e53820b60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="calendar-star-bold";
export const id="dl_c4c5206c9b7d4aa2a7c4";
export const url=new URL("../icons/calendar-star-bold.svg?v=41af1fa0fa42f206ca7dcab5ee7ea3e27642afdf360f2d72fbe7db6e70398459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

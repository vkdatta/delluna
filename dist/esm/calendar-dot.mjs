export const name="calendar-dot";
export const id="dl_a4e20c77685f4f98a123";
export const url=new URL("../icons/calendar-dot.svg?v=066f890268b087adf12d4e33495b4bb47d22ec3e23b194a73d2f942493fa1e8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

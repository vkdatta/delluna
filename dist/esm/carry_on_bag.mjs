export const name="carry_on_bag";
export const id="dl_3ed7e577ca5e910d6b86";
export const url=new URL("../icons/carry_on_bag.svg?v=23f43ae90a1474353763a939c3acc686191dfbac4edf177bddf94737151859ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

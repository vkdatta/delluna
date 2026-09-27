export const name="people_size_decrease-fill";
export const id="dl_abd3c5a82184241ff394";
export const url=new URL("../icons/people_size_decrease-fill.svg?v=b6521436cc0f80571a3a12af2ca8a2b3cbd641b63075500670c29ed7f27a25fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

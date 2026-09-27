export const name="seat_window";
export const id="dl_caea17e42d9852253dbb";
export const url=new URL("../icons/seat_window.svg?v=b2db02b323b50fd6ad8cd6b0ebb351720543fb98c3bc89abab7ac15dd478e365",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

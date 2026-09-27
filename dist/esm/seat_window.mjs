export const name="seat_window";
export const id="dl_2edd95fc268917a120dd";
export const url=new URL("../icons/seat_window.svg?v=e780c88967b6bad95ede23baf0a18214ed8bba9fbd825236319f8cd7c57ab55d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

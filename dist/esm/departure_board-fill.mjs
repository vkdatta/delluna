export const name="departure_board-fill";
export const id="dl_f9c565fca6f149258a1f";
export const url=new URL("../icons/D/departure_board-fill.svg?v=939bcb893be0db517d8d9f8d2818e49e71368b5152e8ac5bc967b639cc64c05d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

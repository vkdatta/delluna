export const name="hotel";
export const id="dl_a86818cf5acfe490fe42";
export const url=new URL("../icons/hotel.svg?v=724d137e5f5f52d8c5291a6ec9f67573e7833dd076a12abc96688bc05f8c8478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

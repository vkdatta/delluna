export const name="seat";
export const id="dl_82d47d1ee55e213a9428";
export const url=new URL("../icons/seat.svg?v=1549d20bde4cd6649af7b1cc7cf37cd46564825d6d03dfdec83504de457e71ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

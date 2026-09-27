export const name="chess_bishop_2-fill";
export const id="dl_997eb83721f05f439d0c";
export const url=new URL("../icons/chess_bishop_2-fill.svg?v=076e09cfc1c321599556126d1ccd760dad1523fdf0acadcbf114374400f9b263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

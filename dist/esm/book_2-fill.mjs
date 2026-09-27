export const name="book_2-fill";
export const id="dl_0ba2c979d0fd2626c3e9";
export const url=new URL("../icons/book_2-fill.svg?v=801332c6c070c782f74240db53b4ce74f974527693af5afd05f2c35a72c517d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="menu_book-fill";
export const id="dl_8c8b8f57232b4b88b51d";
export const url=new URL("../icons/M/menu_book-fill.svg?v=e920b9d06c8bc2767cb3309e864b2f2c230bdf45c53bf8ba7df5d12a25511414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-chess-queen";
export const id="dl_f5fd9353fdc546e3bfe5";
export const url=new URL("../icons/lucid_1-chess-queen.svg?v=e677b852635a404769511d51b84ffb1cfd462333c702c8fcafb94896632cbe16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

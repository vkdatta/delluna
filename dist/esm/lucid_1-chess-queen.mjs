export const name="lucid_1-chess-queen";
export const id="dl_f5fd9353fdc546e3bfe5";
export const url=new URL("../icons/lucid_1-chess-queen.svg?v=5874644e078b8be944822e002ff3b1f8c376f4926164a758ce0fb9ce345f1ebf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

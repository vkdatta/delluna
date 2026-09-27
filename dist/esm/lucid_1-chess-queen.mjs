export const name="lucid_1-chess-queen";
export const id="dl_f5fd9353fdc546e3bfe5";
export const url=new URL("../icons/lucid_1-chess-queen.svg?v=13f8efec222aacfe93f855f6fb723def38f76194b36acfd57fb0a88ae3a436eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

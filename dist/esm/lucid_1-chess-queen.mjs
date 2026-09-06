export const name="lucid_1-chess-queen";
export const id="dl_f5fd9353fdc546e3bfe5";
export const url=new URL("../icons/lucid_1-chess-queen.svg?v=33f505fcd59ca4a3fd467b92d84a51f680e0a95b5524efee6735006136a1950a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

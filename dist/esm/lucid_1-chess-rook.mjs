export const name="lucid_1-chess-rook";
export const id="dl_50fb32a0496846f586de";
export const url=new URL("../icons/lucid_1-chess-rook.svg?v=b8bd9de5817c5b9cf1e439ad7b75617ac9d2c59a5c13b41c4aed58c7c369a13d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

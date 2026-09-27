export const name="lucid_1-chess-rook";
export const id="dl_50fb32a0496846f586de";
export const url=new URL("../icons/lucid_1-chess-rook.svg?v=6f7f84f65cfef905c9abdf3c65d0844b9851420a480f42f590d69f139ea492c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

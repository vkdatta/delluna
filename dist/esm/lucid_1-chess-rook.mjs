export const name="lucid_1-chess-rook";
export const id="dl_50fb32a0496846f586de";
export const url=new URL("../icons/lucid_1-chess-rook.svg?v=c2f5ddec5b393d6680c22ed0c8fa946adf119d9c38655429fd826d728104bbcd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

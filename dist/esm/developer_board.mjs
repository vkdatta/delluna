export const name="developer_board";
export const id="dl_d62cbd9b9465215bc772";
export const url=new URL("../icons/developer_board.svg?v=14238cab68723601dcb1dffa4609c2980c60260a490a9be784f73cd91b37b16c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

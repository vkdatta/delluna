export const name="chess_queen-fill";
export const id="dl_8093556808a3a3cc80b1";
export const url=new URL("../icons/chess_queen-fill.svg?v=5efec8f0c7eb2c766d5583a6954d9cd6bee755ec01fb71b440fb44c0b90823b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

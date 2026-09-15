export const name="chess_king";
export const id="dl_2462d6578e9b492893cc";
export const url=new URL("../icons/C/chess_king.svg?v=e24c3f0eb1d47b935298955740c0b6db3621f1b40140f153a221a3cbb9eef05c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

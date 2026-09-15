export const name="chess_king-fill";
export const id="dl_750844588c2447c9b719";
export const url=new URL("../icons/C/chess_king-fill.svg?v=a03417d5050ae8e1dc48a28fcf0bb606ab863ea4cf1eeb11b70e6c4ea024e5cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

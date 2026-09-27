export const name="chess_knight-fill";
export const id="dl_0e69288f69cb23e1cfe2";
export const url=new URL("../icons/chess_knight-fill.svg?v=ef8d6772723437f64c82a5915749d34013420053c1755ec39c7eb3de0e1b3e2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

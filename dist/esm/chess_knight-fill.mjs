export const name="chess_knight-fill";
export const id="dl_8e8cee63fe829d59c7ba";
export const url=new URL("../icons/chess_knight-fill.svg?v=dfe0f3fa343d77c3d1073fa6576aa2ea73c98c7e7cbf4b926ab26dd421292188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

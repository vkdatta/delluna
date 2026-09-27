export const name="chess_knight-fill";
export const id="dl_c874b3ae17ae40591a80";
export const url=new URL("../icons/chess_knight-fill.svg?v=3898b0790570ed92f0ba84769a435bb9244eb237b236b8b12c8ba063dee04901",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

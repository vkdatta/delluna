export const name="chess_bishop_2";
export const id="dl_7ba2aa2087ea41458dff";
export const url=new URL("../icons/C/chess_bishop_2.svg?v=a05b3d1011ef6c0ebad71144c878c5cacb343d121c90c49d60134e2864878172",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

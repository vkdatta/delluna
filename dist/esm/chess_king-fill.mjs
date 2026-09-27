export const name="chess_king-fill";
export const id="dl_c5862df01523c7073d3f";
export const url=new URL("../icons/chess_king-fill.svg?v=aff8a94427d8aac34b55a11ecee2ed6fcc8a4a9ffee09874dcbd68cffa71489c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

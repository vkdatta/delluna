export const name="chess_king_2-fill";
export const id="dl_1475629513782c93ae08";
export const url=new URL("../icons/chess_king_2-fill.svg?v=5ae45803d21c7c28c82ca80910202e937dd9733efc88bf3ff73b679130306ce6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

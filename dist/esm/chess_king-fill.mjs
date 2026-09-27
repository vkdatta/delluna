export const name="chess_king-fill";
export const id="dl_c75b807f278c4c47f832";
export const url=new URL("../icons/chess_king-fill.svg?v=17a6e13e87fed9243aa6c576f1cfd5a134cc707a5b0c35a520f6d184dbfae006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

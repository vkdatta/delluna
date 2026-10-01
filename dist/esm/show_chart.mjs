export const name="show_chart";
export const id="dl_c60d97899da27a24b444";
export const url=new URL("../icons/material_symbols/show_chart.svg?v=2f49d77ba2a12cd87bcb3c4daee6a864f1748fe43d2be6a9b69079d4c713c36f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

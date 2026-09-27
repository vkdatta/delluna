export const name="swap_horizontal_circle";
export const id="dl_484a49c772de6802c4f9";
export const url=new URL("../icons/swap_horizontal_circle.svg?v=4313a58538766bf3a4ed4e7d5661bf55ee61290eb2cc2ec431528867c0cc8757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

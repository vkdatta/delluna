export const name="swap_horizontal_circle";
export const id="dl_f9b11c113c60474084d8";
export const url=new URL("../icons/S/swap_horizontal_circle.svg?v=4313a58538766bf3a4ed4e7d5661bf55ee61290eb2cc2ec431528867c0cc8757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="arrow_left_alt-fill";
export const id="dl_1a67e7cac25ace971d7b";
export const url=new URL("../icons/arrow_left_alt-fill.svg?v=43060cc8423753b0318773cbda2f15519a687d0aa03849b5839f7fe759413a5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

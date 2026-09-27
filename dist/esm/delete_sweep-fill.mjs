export const name="delete_sweep-fill";
export const id="dl_c2a0dea92b0d56b59d4b";
export const url=new URL("../icons/delete_sweep-fill.svg?v=fefadf552f3e9fab3d55e1923b03879c5ecab0dac532066810b507511e23bc46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

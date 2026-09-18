export const name="join_inner-fill";
export const id="dl_153d694ebabb43cb99f2";
export const url=new URL("../icons/join_inner-fill.svg?v=a5d7032bfae373195a11498644fb395995a862bcd990214639ba48e464f1eb11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

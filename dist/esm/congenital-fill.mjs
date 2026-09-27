export const name="congenital-fill";
export const id="dl_2960718f07e160c2610a";
export const url=new URL("../icons/congenital-fill.svg?v=0252c5b094588de0cc5c4715a6794ba47a2c632e32e9cc0a8a04d14d723b51c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

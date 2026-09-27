export const name="laundry";
export const id="dl_c87c0bdbb4619ac37ad2";
export const url=new URL("../icons/laundry.svg?v=24354b38feba21bbd6f86dec5ce0496178cb7827bb072810108ceb3832850d9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

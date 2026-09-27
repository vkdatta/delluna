export const name="rounded_corner-fill";
export const id="dl_99c1a4eb0f9ffb6eb789";
export const url=new URL("../icons/rounded_corner-fill.svg?v=f22fae1ef403254a43cfc2e12f2c556ac0f38415e3e9051fdf477debddece2f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

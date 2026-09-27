export const name="clock-clockwise-fill";
export const id="dl_cbb7810e43334fdcb4a2";
export const url=new URL("../icons/clock-clockwise-fill.svg?v=f86f33c1f32b61b3c60fa49f79d766870e12e48dd5719a0f531d7657288dc386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

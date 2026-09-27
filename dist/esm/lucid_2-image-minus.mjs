export const name="lucid_2-image-minus";
export const id="dl_6b4d2389faec483cbaa2";
export const url=new URL("../icons/lucid_2-image-minus.svg?v=d7bcef0b1a56f9f03ed304a4f6041620a80f64395dd7c5061fadd4080434139b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

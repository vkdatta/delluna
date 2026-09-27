export const name="mobile_sound_2";
export const id="dl_746b6f41372d19bf968f";
export const url=new URL("../icons/mobile_sound_2.svg?v=005346643599a0b7c331e0dfc6f31755902ba3bc2207e35f78a08e6fc09d2f5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

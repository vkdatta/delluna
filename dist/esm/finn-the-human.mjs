export const name="finn-the-human";
export const id="dl_9d23827e48b54bb1b5e8";
export const url=new URL("../icons/finn-the-human.svg?v=1b716f64d72661faf24222f2712947e293b2bd20e9d065094f988cedad1c5450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="play-pause-bold";
export const id="dl_f872186e3293446bbe9b";
export const url=new URL("../icons/play-pause-bold.svg?v=ec780b2877e72c41d4e52dc8e74208c1cbaf55dbb6a8522a5146fd0b9513653f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

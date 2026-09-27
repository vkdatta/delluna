export const name="speaker-simple-none-light";
export const id="dl_a8c8800ee37e281526bf";
export const url=new URL("../icons/speaker-simple-none-light.svg?v=18ca8973b23cea17655538bc7024d0b4fa45fdf7346fb880ee62f7b998932f7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

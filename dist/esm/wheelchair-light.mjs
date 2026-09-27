export const name="wheelchair-light";
export const id="dl_17247d7212955ce59ded";
export const url=new URL("../icons/wheelchair-light.svg?v=2d360466c317d5779039c86d5754e742c87aef30963105740fddf07676393d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

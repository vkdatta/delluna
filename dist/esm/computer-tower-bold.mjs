export const name="computer-tower-bold";
export const id="dl_d4c4ed1e52914805b0b6";
export const url=new URL("../icons/computer-tower-bold.svg?v=daa99a449bf7a37b6321582458a462f274516c538d3ff9333696f66d6c481f06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

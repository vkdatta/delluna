export const name="piano_off";
export const id="dl_f40c9e7e3ff84c4986e4";
export const url=new URL("../icons/P/piano_off.svg?v=de2dc2fc576c9e07bb1633163f7072a23b6cea47f47a9a09d0f83afdd9cf4e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

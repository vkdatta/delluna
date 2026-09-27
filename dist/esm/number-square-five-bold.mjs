export const name="number-square-five-bold";
export const id="dl_8008998795b84b0fbda0";
export const url=new URL("../icons/number-square-five-bold.svg?v=f15a75849458070b822ddabcfb5604aa1d8b3d15cefa9cdaa3084c5c76ff9218",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

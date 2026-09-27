export const name="hourglass-low-bold";
export const id="dl_edc8cc16705f473b8575";
export const url=new URL("../icons/hourglass-low-bold.svg?v=9be8765472c8132f04aa244e79d3357bd3eb87c3b529035a06b2d8d8287bd4df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

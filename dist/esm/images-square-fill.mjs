export const name="images-square-fill";
export const id="dl_d19ade08b158442795ec";
export const url=new URL("../icons/images-square-fill.svg?v=483cda1cd05fb7c16bc0d0884c9f7989c6e3a942ba9da4863998b9f0a4fac8ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

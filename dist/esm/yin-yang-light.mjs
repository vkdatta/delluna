export const name="yin-yang-light";
export const id="dl_359853e1c8d245ee951a";
export const url=new URL("../icons/Y/yin-yang-light.svg?v=576c9620a997ed5d0d64d815a542b3d2ab6c42ad666f61c49fead6f9e05b9995",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="certificate-light";
export const id="dl_bc52a9ddffa54f3d8d1a";
export const url=new URL("../icons/certificate-light.svg?v=7cef1e894de082236a0030296af80ed625213003f10e8f404de35c5a2e61c2a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

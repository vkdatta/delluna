export const name="exclamation-mark-fill";
export const id="dl_8c03f644652f4ecba32f";
export const url=new URL("../icons/exclamation-mark-fill.svg?v=22f0cf07ec7da83e1e6fe9c40bd01808a0f7b77de1947ca3d0375a0f1894e85d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

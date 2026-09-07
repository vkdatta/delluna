export const name="sparkle-bold";
export const id="dl_ff078ef68ae6492a96af";
export const url=new URL("../icons/S/sparkle-bold.svg?v=d61e5264b0866af931617635cbda2cd23f7b76d2d0f6daad1560dff8f3cf4980",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

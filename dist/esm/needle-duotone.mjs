export const name="needle-duotone";
export const id="dl_6989e9fac302410ba2a6";
export const url=new URL("../icons/needle-duotone.svg?v=2cbe29cb93a250613d7d58fc10f2f68c1ba16e9b447472694268db3745d226a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

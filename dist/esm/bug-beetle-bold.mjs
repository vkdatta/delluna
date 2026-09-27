export const name="bug-beetle-bold";
export const id="dl_f9708960e77645a8b794";
export const url=new URL("../icons/bug-beetle-bold.svg?v=46b114ef108d50c7d8abf8a389f7a93c80f77e4e2c3907ca8177d2fcd33df56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

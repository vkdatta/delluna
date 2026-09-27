export const name="article-ny-times-bold";
export const id="dl_2c60b709e9c3414f8b1c";
export const url=new URL("../icons/article-ny-times-bold.svg?v=736cc49c3de28946569e4396fb3362c00e5c13fe62b9cffb01a33d9afe0f3f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

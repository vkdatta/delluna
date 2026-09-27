export const name="markdown-fill";
export const id="dl_859dbce3df6cd99bffb2";
export const url=new URL("../icons/markdown-fill.svg?v=01334dcf74db12644618ce49f40175495461716910137746cc605e6b3db590af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="arrow-fat-lines-up-light";
export const id="dl_4aae584ff1864c87a99e";
export const url=new URL("../icons/arrow-fat-lines-up-light.svg?v=534ba1f9fee9ba3d52f216ce6241f2246150a49c21baa948ee55a2dea426d6f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

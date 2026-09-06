export const name="clipboard-text";
export const id="dl_8d85692d524f4030bd14";
export const url=new URL("../icons/clipboard-text.svg?v=1b1116133ad78d227c8d77f52856bde049dc02a351a1810d5dc91b2475cb873f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

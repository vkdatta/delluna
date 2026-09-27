export const name="puzzle-piece-light";
export const id="dl_8714e76b593f468581d3";
export const url=new URL("../icons/puzzle-piece-light.svg?v=b66b9ab06be36bc5f168bdcdc1b0d8854a150275c44fe5c0ce585d1ac2a2e52a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

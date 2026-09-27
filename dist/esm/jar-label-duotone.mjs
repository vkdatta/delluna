export const name="jar-label-duotone";
export const id="dl_39f46284ced64416badb";
export const url=new URL("../icons/jar-label-duotone.svg?v=5630d8374af889b73325998b6b1ce8fdf93a21ff13f201666d31f2faf7bc5158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

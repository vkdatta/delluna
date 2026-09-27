export const name="browser";
export const id="dl_c49c303f41254c329a9e";
export const url=new URL("../icons/browser.svg?v=5c972ec6909907afa2c526aee3864220539fc6831e60d341da0ca6518192e6c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

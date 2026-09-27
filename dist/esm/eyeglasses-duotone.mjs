export const name="eyeglasses-duotone";
export const id="dl_0c95e5b8efb143109a96";
export const url=new URL("../icons/eyeglasses-duotone.svg?v=98008cc535afb36ab103dacb1555028ca1198f963c8f2d89fa58a53e40ea197c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

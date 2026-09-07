export const name="tray-arrow-up-duotone";
export const id="dl_da3a66c198c544f79e82";
export const url=new URL("../icons/T/tray-arrow-up-duotone.svg?v=5adbfa22ab1720eb192bd4d73acb0bb503b73dbebac6b4a56ce9bad4412f26d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

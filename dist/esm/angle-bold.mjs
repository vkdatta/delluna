export const name="angle-bold";
export const id="dl_294acdf52cd548adb002";
export const url=new URL("../icons/angle-bold.svg?v=bf3d289f725e73abe4424860257594a627b837d15d0db18b3bf8219b7f068a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

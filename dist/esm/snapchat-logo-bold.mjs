export const name="snapchat-logo-bold";
export const id="dl_00bffec8685840e2550f";
export const url=new URL("../icons/snapchat-logo-bold.svg?v=e7e3d87a00881e476c90fe73fb4be94d3893f6e5a4396fccb67f54893c1e2a56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

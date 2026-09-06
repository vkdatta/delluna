export const name="island-light";
export const id="dl_ba42cf08086e4f12b0f0";
export const url=new URL("../icons/island-light.svg?v=d5479dce6259f61e7379510be7c49738aa6f3d36114cc9717eedde4c7149d4ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

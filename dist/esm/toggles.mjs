export const name="toggles";
export const id="dl_41120482966d7fafe365";
export const url=new URL("../icons/toggles.svg?v=f4d815ebca6f7b9a6a2ea3f3c6bd46aa03c6f6738c0ea190758bbbeb23b1289a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

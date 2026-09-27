export const name="arrow-fat-line-down-light";
export const id="dl_e4f57b8d11e14ae7a871";
export const url=new URL("../icons/arrow-fat-line-down-light.svg?v=0e2e38e3d762ac5be71300ae8db301eaf5b74b3e1d223f37c18e0ed400ab4c40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

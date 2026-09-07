export const name="user-light";
export const id="dl_f9fd262056b947e0b5b5";
export const url=new URL("../icons/U/user-light.svg?v=b26184abbe006d1874c2cf7bee91e13b807731966c1326b485431fbe3e4d9b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

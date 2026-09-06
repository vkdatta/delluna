export const name="check-square-offset-fill";
export const id="dl_75618cd2b5a44740b725";
export const url=new URL("../icons/check-square-offset-fill.svg?v=3aa0bb31fd23f99cb3d275dfb07ecd6add62614d8e3fd65c7dc09fbfc9cd9209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

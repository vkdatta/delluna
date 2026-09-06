export const name="camera-plus-fill";
export const id="dl_8fa772e63b894da79b8b";
export const url=new URL("../icons/camera-plus-fill.svg?v=85a7ddfc40920fb8549c650a038550deff13198dedcbea56cc016eb7ac0fb7d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

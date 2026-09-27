export const name="hash-straight";
export const id="dl_d79bf25998e14834852b";
export const url=new URL("../icons/hash-straight.svg?v=ef2d8ee88962904799ef97186041ee60a07c255cd4926b8755743ca0cbb3d544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

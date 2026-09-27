export const name="vibrate-light";
export const id="dl_71b1c906be5b0041ddad";
export const url=new URL("../icons/vibrate-light.svg?v=5e30cb36846c29b79e7b607d1769a084a5fd2aa221a2d71c6c60832c2357cec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

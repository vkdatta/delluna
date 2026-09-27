export const name="front_hand-fill";
export const id="dl_69cf598fe22c378e4947";
export const url=new URL("../icons/front_hand-fill.svg?v=ceab7a2d528d1519fd1897d1bfade309f262337d8f4f2e5d23a59a75f68d7501",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

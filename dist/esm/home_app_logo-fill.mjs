export const name="home_app_logo-fill";
export const id="dl_dda4f5a16e9a4e4dc012";
export const url=new URL("../icons/home_app_logo-fill.svg?v=12e4ac0aff79e71ad0f40c370304bfa565689ba8c9eb9a407644bd9c6c223cae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

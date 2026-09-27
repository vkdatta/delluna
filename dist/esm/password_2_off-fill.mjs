export const name="password_2_off-fill";
export const id="dl_32d78f045d89e22a68ce";
export const url=new URL("../icons/password_2_off-fill.svg?v=d1b7d5121a0317e48882b583ed9a6536067cf4c5be2d6492f8f68f706b4b9eeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

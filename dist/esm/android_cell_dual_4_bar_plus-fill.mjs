export const name="android_cell_dual_4_bar_plus-fill";
export const id="dl_a3a90226a933071ea88b";
export const url=new URL("../icons/android_cell_dual_4_bar_plus-fill.svg?v=ac8da787f93158c2e8bf71e6224d49de729f5d4668d27d8f13738576af90daeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

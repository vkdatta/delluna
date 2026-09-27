export const name="touch_app";
export const id="dl_e9a7dfd8dea6d9b52298";
export const url=new URL("../icons/touch_app.svg?v=41baa9b140d5e9da1dcee2bbb78259c8018d6945d21695c5b5b2179ff4590e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

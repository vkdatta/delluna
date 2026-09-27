export const name="light_mode_auto-fill";
export const id="dl_797f93fae5bb5f3e099b";
export const url=new URL("../icons/light_mode_auto-fill.svg?v=69c5d8446889858883cf663e5c13c96ef6c0de784d7ac08a0d1f7021e3819cbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

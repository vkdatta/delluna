export const name="lucid_1-arrow-big-down-dash";
export const id="dl_df9f75c1f8f54a79b8a5";
export const url=new URL("../icons/lucid_1-arrow-big-down-dash.svg?v=ec01221a90cb796c3350db6916bee2971ff0f99ee07c4bfb53ea357c59ccc534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

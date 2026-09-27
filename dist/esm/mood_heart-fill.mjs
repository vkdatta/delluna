export const name="mood_heart-fill";
export const id="dl_23c58b29f3363e18b1c7";
export const url=new URL("../icons/mood_heart-fill.svg?v=96e2456ffa93e3ea1407b15c17f0796472f62829c6d233e9bc18c04b2203b41c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

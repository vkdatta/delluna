export const name="battery_android_question-fill";
export const id="dl_35153ec9dd222956bfbe";
export const url=new URL("../icons/battery_android_question-fill.svg?v=35dbfb5871f504388d33280b5af2989532766130bbbb4e2022615faed1b23c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

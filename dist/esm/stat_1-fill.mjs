export const name="stat_1-fill";
export const id="dl_f93e38f14d5e1fa996e2";
export const url=new URL("../icons/stat_1-fill.svg?v=42dc6c34a7ab52f556fd3098332d8f4a57af1f902c9b44db2cbc2876344ccc5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

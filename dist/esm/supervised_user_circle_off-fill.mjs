export const name="supervised_user_circle_off-fill";
export const id="dl_4b449efd2f5b390a2780";
export const url=new URL("../icons/supervised_user_circle_off-fill.svg?v=0df8cb433ef09a9d298d3e4714c069a387afa418c20af235cfcef93be11c7150",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

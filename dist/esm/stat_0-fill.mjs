export const name="stat_0-fill";
export const id="dl_340e6ad23d16862aa9c5";
export const url=new URL("../icons/stat_0-fill.svg?v=d00a4bd8c470cd66d547d08cc3890fbf797ca026165efe3ead030d305c91bde4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

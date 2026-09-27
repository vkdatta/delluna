export const name="bookmark_remove-fill";
export const id="dl_9b788f629fd70884d7aa";
export const url=new URL("../icons/bookmark_remove-fill.svg?v=df95df0a25da598806b9abd11b598f5055dbc955a9023e37ae370664530ee47a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

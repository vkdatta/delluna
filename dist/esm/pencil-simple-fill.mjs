export const name="pencil-simple-fill";
export const id="dl_9a726ba0a3cc46868a8e";
export const url=new URL("../icons/pencil-simple-fill.svg?v=3ff2043733aaaedff43d14c8f9bf36a7a6a8df0f09a6ec6d489619757011dbe5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

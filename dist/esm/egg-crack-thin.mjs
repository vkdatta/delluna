export const name="egg-crack-thin";
export const id="dl_4f0ce2f93ccc4062b7cc";
export const url=new URL("../icons/egg-crack-thin.svg?v=e66f7571eecffd2703d5be29b77991eb34ad238b1718d312886018b53fd96b4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

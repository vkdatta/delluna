export const name="notion-logo-light";
export const id="dl_9b188cbf5375400fa2b1";
export const url=new URL("../icons/notion-logo-light.svg?v=b112ea1e640aa0ad639a088a6c11f5ac892f308f298a8fd940e5005bdd127802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

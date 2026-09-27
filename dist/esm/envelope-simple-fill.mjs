export const name="envelope-simple-fill";
export const id="dl_7326117399f7478b8024";
export const url=new URL("../icons/envelope-simple-fill.svg?v=3d4b561d49d2baf4020fda19fdcf44c652bc7e6415d6abf39ac91f3418e11b9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

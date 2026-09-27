export const name="file_copy_off-fill";
export const id="dl_e8b237339888e277e702";
export const url=new URL("../icons/file_copy_off-fill.svg?v=913ff3198ca797c48f980ab39c54a6ba1768e59f163436384eccbeaf62849aef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

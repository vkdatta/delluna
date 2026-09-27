export const name="file_copy";
export const id="dl_1d2497caefd800e8e3f7";
export const url=new URL("../icons/file_copy.svg?v=c17cbd56546273e7d26b19242a358073dc754c54b93069a90d3ab1f6ff66ff17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

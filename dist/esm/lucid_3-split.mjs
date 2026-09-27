export const name="lucid_3-split";
export const id="dl_9ea6e36645f741d3a79e";
export const url=new URL("../icons/lucid_3-split.svg?v=c33ccc1d693172be487178960a8f83691f2afb5b93b72cf882fda8dd43a69659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

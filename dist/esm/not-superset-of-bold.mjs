export const name="not-superset-of-bold";
export const id="dl_9bafb87237a643018840";
export const url=new URL("../icons/not-superset-of-bold.svg?v=5e16927a8dbb1c9463d0d3a9e00c1f7915b7178fdc00c553410b7af50d720c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

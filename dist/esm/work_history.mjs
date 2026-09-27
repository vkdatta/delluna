export const name="work_history";
export const id="dl_967000b9eaa8b841ecc8";
export const url=new URL("../icons/work_history.svg?v=c54198e994f2ef0b3354485ac7f40b72b048187e6016a36de7eee8d9218cc5ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="align-center-vertical-light";
export const id="dl_9bf5d8f218b34cc8851c";
export const url=new URL("../icons/align-center-vertical-light.svg?v=db1e506dbdf42f382e52f596fda567eba733e48468d8352b400ef364bd347e94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

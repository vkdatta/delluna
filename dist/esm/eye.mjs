export const name="eye";
export const id="dl_9395a5f8b084472e94d5";
export const url=new URL("../icons/eye.svg?v=7fcec1c0498c7f87ca4014ba3e202c97838a8f96611bcdc617894326ac9a8726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

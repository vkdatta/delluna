export const name="home_max-fill";
export const id="dl_9f862f83042b0eefcd5a";
export const url=new URL("../icons/home_max-fill.svg?v=959ee79e94455e7562d344bc0b726123778f91be1d2e08024e091ab94c0ccb97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

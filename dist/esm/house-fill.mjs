export const name="house-fill";
export const id="dl_fb666a380c434d138094";
export const url=new URL("../icons/house-fill.svg?v=628b654df359083a400685dcff16aad83e2d5939eadb44b96d9b0d1b0e92f1cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="taxi-light";
export const id="dl_ecdc9650a55f0e90a83b";
export const url=new URL("../icons/taxi-light.svg?v=60907f010aed50e2192f6aff084b2ae4f8a1ecf4aca8efc332d0541530e738fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

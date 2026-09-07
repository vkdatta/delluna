export const name="rocket-launch-thin";
export const id="dl_8f2432546f11443fbdeb";
export const url=new URL("../icons/rocket-launch-thin.svg?v=d9cbd0c73ec32e13d7bbf4700820ed4b193da7c634326e49306687986083e1a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

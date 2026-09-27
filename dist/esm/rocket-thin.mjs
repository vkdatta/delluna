export const name="rocket-thin";
export const id="dl_17154c1f6aae4af68b10";
export const url=new URL("../icons/rocket-thin.svg?v=432321ef0da4defff69a6d6a5a49eeaad05135e5cc04db4a71a75fd8c0d8f329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="arrow-square-right-thin";
export const id="dl_589564a109f24b5d9742";
export const url=new URL("../icons/arrow-square-right-thin.svg?v=27be77a1e26d97dbff5507d8257fc3e2059f1ccef7d8c30360a8f3339c77c9ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

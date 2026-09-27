export const name="shelf_position";
export const id="dl_db736ed6dfd41603ab93";
export const url=new URL("../icons/shelf_position.svg?v=64d537d781f87c432314b123647483f7da9e40232dc1084209e12146957a1168",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

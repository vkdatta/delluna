export const name="yarn-bold";
export const id="dl_173f39c5aa7d03c086be";
export const url=new URL("../icons/yarn-bold.svg?v=84b873ce07e5c2279fb352656bdf3cb96e4c3c77bb4979cf84b8d395d7464d02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

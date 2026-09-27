export const name="martini-bold";
export const id="dl_d239e2411f3645fc80be";
export const url=new URL("../icons/martini-bold.svg?v=844a6df3473c8ef53671e5ecd08fbe11a8659f4fe3a7387a67451ab64928df5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

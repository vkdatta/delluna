export const name="lucid_1-arrow-right";
export const id="dl_f3ac3d3e9be74cf5a538";
export const url=new URL("../icons/lucid_1-arrow-right.svg?v=395ec954c5be457eb683448e450f916288d5d73602068434571f324bd8810f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

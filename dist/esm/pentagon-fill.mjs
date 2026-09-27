export const name="pentagon-fill";
export const id="dl_811422cda0034f7d9713";
export const url=new URL("../icons/pentagon-fill.svg?v=35a8b1b6f07d7a0390e317e38d7db1bc01a0a1fbb1bdad5b892ca79862af31dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

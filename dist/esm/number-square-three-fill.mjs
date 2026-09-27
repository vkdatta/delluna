export const name="number-square-three-fill";
export const id="dl_fb6eebee269442748447";
export const url=new URL("../icons/number-square-three-fill.svg?v=470a55d23e5c55132a24e5abb8293acbbb2e8c6c8c9443e0ec04a1fb2f661329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

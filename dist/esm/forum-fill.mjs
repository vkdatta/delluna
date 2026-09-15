export const name="forum-fill";
export const id="dl_144eae7dd8a34f4fb6fc";
export const url=new URL("../icons/F/forum-fill.svg?v=9daf12b9dbbf6dcd371cd502e228075bca3052f4f9a50857eab495e55edfbf3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rows-fill";
export const id="dl_946d89a25100484bb448";
export const url=new URL("../icons/rows-fill.svg?v=9c850e2830d5ce91300c8946beca8277b73a90d319238c3689771f32aa94d823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

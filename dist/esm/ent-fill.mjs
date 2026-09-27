export const name="ent-fill";
export const id="dl_11cd8f86549589956208";
export const url=new URL("../icons/ent-fill.svg?v=131c0eae10d648d835445e5ac93e2215a193a40c361099029717e45ca591fb7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

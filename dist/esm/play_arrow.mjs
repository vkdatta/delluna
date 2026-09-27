export const name="play_arrow";
export const id="dl_6a1301b21605d9e20fff";
export const url=new URL("../icons/play_arrow.svg?v=bfa7e69d56b322fe6340abf655564e15c604280484a887db2bd128f478b32253",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

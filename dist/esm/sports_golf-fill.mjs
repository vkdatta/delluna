export const name="sports_golf-fill";
export const id="dl_ba55c24c7fa873cae865";
export const url=new URL("../icons/sports_golf-fill.svg?v=ccf982de8f1c6f79eb905c68e29b77f74811c5cf4346fb927a5e6fa6a270f058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

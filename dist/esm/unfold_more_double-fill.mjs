export const name="unfold_more_double-fill";
export const id="dl_e55638647c843dbd572a";
export const url=new URL("../icons/unfold_more_double-fill.svg?v=672f9d5a4d1a75f9b4229d08691c3e58412acef391fefad47673e508495c444e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="target-point";
export const id="dl_05d89cbd3fac556a52cb";
export const url=new URL("../icons/target-point.svg?v=9934fd70fa3f85227c54e092639aa2f634c291b5c6e4ec9661fa84dee1627ee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

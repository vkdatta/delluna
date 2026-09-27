export const name="faders-horizontal-fill";
export const id="dl_643f949c0e2e49e68671";
export const url=new URL("../icons/faders-horizontal-fill.svg?v=18c29a108b620e66956ab92b095af0c956dd3176aa067a748e3d952496dc270d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="farm-thin";
export const id="dl_20167713f54f490d8cc9";
export const url=new URL("../icons/farm-thin.svg?v=678850ffdf128729eec032d7729903441800751b6d0bef59d81fa8988e516d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

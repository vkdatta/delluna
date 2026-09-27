export const name="water_drop-fill";
export const id="dl_61233b16a5a492c84e29";
export const url=new URL("../icons/water_drop-fill.svg?v=c828ad5dfaec66eb5eb8a25bf870646fca2e67849f8d0a9eb4180c0425129f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

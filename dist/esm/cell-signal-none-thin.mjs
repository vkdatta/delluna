export const name="cell-signal-none-thin";
export const id="dl_5ea1876f1f384654a583";
export const url=new URL("../icons/cell-signal-none-thin.svg?v=8f0664e95145012e4c0f03a38ab7c9c6a9b8a175cdb0029155219837d8d707f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

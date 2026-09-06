export const name="map-pin-area-bold";
export const id="dl_7ff7d47579394ce08320";
export const url=new URL("../icons/map-pin-area-bold.svg?v=6303c588d7edce3377c2f391a47ff39e5068a21be450cd7a73d5e2e96913bfc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

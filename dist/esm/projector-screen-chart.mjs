export const name="projector-screen-chart";
export const id="dl_802c353d90a94cb9885a";
export const url=new URL("../icons/projector-screen-chart.svg?v=3ca14a05125235b690d7cf2aa01d415fb03af4cad54e3584b998eaba7f3187e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

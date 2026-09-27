export const name="map-pin-simple-area";
export const id="dl_fb22d637114c4eb89a54";
export const url=new URL("../icons/map-pin-simple-area.svg?v=92d8fed70d60a4422422f19c7800503198692785b42a261f67f3d341d564e9b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

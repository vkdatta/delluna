export const name="map-pin-area-thin";
export const id="dl_a06795e69df047e0b05f";
export const url=new URL("../icons/map-pin-area-thin.svg?v=489ee26de3e0475cd2b71118e47468fb961062e38db577c50f641515a3ffe5f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

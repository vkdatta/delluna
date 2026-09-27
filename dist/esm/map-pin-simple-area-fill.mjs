export const name="map-pin-simple-area-fill";
export const id="dl_f68fa264bb794a0e9fc0";
export const url=new URL("../icons/map-pin-simple-area-fill.svg?v=cf3888a6d88212e06bf84b6316074da20edb2aceb07d7fe94fcd745c3ecfbbf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

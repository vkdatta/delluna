export const name="emergency-fill";
export const id="dl_db20c531061bdddae3b9";
export const url=new URL("../icons/emergency-fill.svg?v=21a314b22e93be4d456604853856c91f766a8ff65c961909d9fb368221c1d3be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

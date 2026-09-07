export const name="charging-station-bold";
export const id="dl_71070ee7e4574b23ba21";
export const url=new URL("../icons/charging-station-bold.svg?v=0c3515fc59ae753f04bf00979624d234cd4a58ab876e9e40b3af643ba901d69f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

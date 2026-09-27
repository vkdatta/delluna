export const name="arrows-out-line-horizontal-fill";
export const id="dl_96e16b51a16543ab9f65";
export const url=new URL("../icons/arrows-out-line-horizontal-fill.svg?v=972d4bd65afd15314ce22aa96db4e9beee6560329d64035cec3112938ca70682",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

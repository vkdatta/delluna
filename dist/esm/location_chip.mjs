export const name="location_chip";
export const id="dl_152167ba0f4054e9233c";
export const url=new URL("../icons/location_chip.svg?v=606e44362bc31e75a04d2a46bf1abd45689817e04ae5b4d3750d91ac3276eff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

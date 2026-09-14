export const name="arrows_outward";
export const id="dl_731605a0ab294fc187d8";
export const url=new URL("../icons/A/arrows_outward.svg?v=8a57e420e9b3666c1f9a07cb33ada99b6c3d3c55270afe485b9e313a3adab437",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

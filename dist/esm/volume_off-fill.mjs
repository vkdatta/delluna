export const name="volume_off-fill";
export const id="dl_4df4a37e6cf2754f0188";
export const url=new URL("../icons/volume_off-fill.svg?v=2a9e06464223a15d3da598ec1423cf2662e8c297168d515902b7674a1d415077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

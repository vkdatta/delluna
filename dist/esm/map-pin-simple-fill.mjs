export const name="map-pin-simple-fill";
export const id="dl_5d59fc72e43e40c58f3e";
export const url=new URL("../icons/map-pin-simple-fill.svg?v=c60c2af2e114e98c62dcf139fa906ba8f2dd6433fa513b89d5951adc35460e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

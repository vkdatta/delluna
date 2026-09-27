export const name="outdoor_grill";
export const id="dl_277e16fb03d4756409f9";
export const url=new URL("../icons/outdoor_grill.svg?v=b205b91f5686dc52dfb511bc4292e60e044dab290a29724b3a8f8e6f9e2b0f25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

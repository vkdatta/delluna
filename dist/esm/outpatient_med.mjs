export const name="outpatient_med";
export const id="dl_dab7ced290264e8f91fb";
export const url=new URL("../icons/outpatient_med.svg?v=0f8bffcbbfa25138543534f61eadad5645f3d13b1e7c37b431114fb468fa92cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

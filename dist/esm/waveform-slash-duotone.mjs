export const name="waveform-slash-duotone";
export const id="dl_2d0f1e20875b428198e7";
export const url=new URL("../icons/W/waveform-slash-duotone.svg?v=1fa1a5654151d3cf4fb833d542e422df8e93ecb74ba5d920e92c3e459de4ad28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

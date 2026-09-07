export const name="waveform-slash-bold";
export const id="dl_9b70bfcb114a432dac28";
export const url=new URL("../icons/W/waveform-slash-bold.svg?v=b0af22979ac7438f37dda1e811642771d2d2f76ab6705369d5ee6fbdd3e9c220",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

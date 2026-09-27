export const name="waveform-duotone";
export const id="dl_f3ef69147c006c8e436f";
export const url=new URL("../icons/waveform-duotone.svg?v=6761d3801cefcc11d0e72895b4c0f7742ac57e19d941780bb1b7d47c37dd798d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

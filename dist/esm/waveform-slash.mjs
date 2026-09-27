export const name="waveform-slash";
export const id="dl_4cce5cc95c4141d35f51";
export const url=new URL("../icons/waveform-slash.svg?v=8806914a38586da386825556043eb6956e3341cc65e9ed8dd4db22219fc4b0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-hdmi-port";
export const id="dl_838437763898425d8acb";
export const url=new URL("../icons/lucid_2-hdmi-port.svg?v=ad36b0157fb859999213dc748ced89479d1751d7f5f40e7f7e1e67ba24212e24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

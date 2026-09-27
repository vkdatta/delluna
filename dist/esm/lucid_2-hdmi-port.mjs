export const name="lucid_2-hdmi-port";
export const id="dl_838437763898425d8acb";
export const url=new URL("../icons/lucid_2-hdmi-port.svg?v=3f906f09bb94c1c069afc70ed60dad6c27570f268830a79cd583bd05fab65d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

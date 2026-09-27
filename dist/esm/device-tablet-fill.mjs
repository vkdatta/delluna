export const name="device-tablet-fill";
export const id="dl_612554495e744c30a37b";
export const url=new URL("../icons/device-tablet-fill.svg?v=69bfacc05a3bcc04a3bc4a77e8bc7209a082cf4c47233a0b1adc6d48f3a11042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

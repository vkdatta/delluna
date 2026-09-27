export const name="mobile_sound_off-fill";
export const id="dl_b5a29593fd7d6a55f587";
export const url=new URL("../icons/mobile_sound_off-fill.svg?v=0c8f540058bb1f4b265ef016e8260c8288578f64a57efae6b7523f0ad6645d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

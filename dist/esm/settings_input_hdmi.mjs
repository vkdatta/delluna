export const name="settings_input_hdmi";
export const id="dl_9418296dbde9dfa8e2f3";
export const url=new URL("../icons/settings_input_hdmi.svg?v=4592d1e7b0fb3ae898c3c29bfef13fd2dc22fdb2280fa97167c9263b127c3355",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

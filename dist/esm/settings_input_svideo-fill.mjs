export const name="settings_input_svideo-fill";
export const id="dl_99deb3b047a54224a007";
export const url=new URL("../icons/S/settings_input_svideo-fill.svg?v=2f6399c14fee280cc1b69cc0b3c5e63e18a725a06ecc4b272c3233f759601e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="settings_input_hdmi-fill";
export const id="dl_9efcfaa0b1184265b656";
export const url=new URL("../icons/settings_input_hdmi-fill.svg?v=da1c4d68a3d0b08e469d954c7e5cb63e816c4ed0aa014a908468ab318ffe13e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

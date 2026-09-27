export const name="settings_input_hdmi-fill";
export const id="dl_c20612edc4198db48935";
export const url=new URL("../icons/settings_input_hdmi-fill.svg?v=9ad4031f8f3bd4bb37a93d9276db67eaeaa4fcf75ea6cbacd91bec077d63ccf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

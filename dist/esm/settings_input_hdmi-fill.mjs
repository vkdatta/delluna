export const name="settings_input_hdmi-fill";
export const id="dl_3551c7f79502cceed680";
export const url=new URL("../icons/settings_input_hdmi-fill.svg?v=eb8814acd89bafd32c94e093f45d3edfbf3ff0c522701cc57509726ae5306a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

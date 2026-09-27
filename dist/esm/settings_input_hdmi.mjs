export const name="settings_input_hdmi";
export const id="dl_b2bcbc9b4a8965db1b23";
export const url=new URL("../icons/settings_input_hdmi.svg?v=2537f500cfe784e46367122aaf62fbd9c267199b5291d1daa9669ab3c5700896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

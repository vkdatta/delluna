export const name="settings_input_hdmi";
export const id="dl_f3b98d9145b20924700f";
export const url=new URL("../icons/settings_input_hdmi.svg?v=160d467ec0c55be510d7666914d708a466c0ef7a7160786d9cae970ac519cabe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

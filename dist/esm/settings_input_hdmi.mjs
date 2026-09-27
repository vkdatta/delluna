export const name="settings_input_hdmi";
export const id="dl_0cf37e6651a39f96c38a";
export const url=new URL("../icons/settings_input_hdmi.svg?v=5900118c06269c30403453f8d07e53021bef161d280e32dc5b17921043ed84a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

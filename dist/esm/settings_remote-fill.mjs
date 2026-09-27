export const name="settings_remote-fill";
export const id="dl_7675ca27461a2988da31";
export const url=new URL("../icons/settings_remote-fill.svg?v=46c51b0cc26593b03a531b0125ea51c06472c2fe20ad6e7faf628495a032a555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

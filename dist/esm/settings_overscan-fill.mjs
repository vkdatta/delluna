export const name="settings_overscan-fill";
export const id="dl_6fdc1d441a49e3b651ba";
export const url=new URL("../icons/settings_overscan-fill.svg?v=25fe774505b7ef9b099dd4c2e062dd6a43aa570bd6722555f7b2a8ebc5e1e4b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

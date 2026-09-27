export const name="desktop_windows";
export const id="dl_31c47c8fb8eee7b69c7d";
export const url=new URL("../icons/desktop_windows.svg?v=1d2b81f6c4ac4f7a600686afd367e4f72355c4c27b9ec581d04c32ed03bf7930",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

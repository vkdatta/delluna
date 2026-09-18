export const name="sync_desktop";
export const id="dl_91797293a0664158ae81";
export const url=new URL("../icons/S/sync_desktop.svg?v=fd0c2dce0f5083efa6cd0998f9a25daabf61fd13adbc696138bf2095ea83c0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

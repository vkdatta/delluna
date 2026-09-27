export const name="calendar_apps_script-fill";
export const id="dl_3b06bfad684281e73597";
export const url=new URL("../icons/calendar_apps_script-fill.svg?v=681fb590f96789374ccaecc880555f7b59f416cc10b25679e0ddd9967699f2d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

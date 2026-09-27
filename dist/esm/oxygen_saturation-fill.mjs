export const name="oxygen_saturation-fill";
export const id="dl_00c53807ffb1ce244314";
export const url=new URL("../icons/oxygen_saturation-fill.svg?v=0bf68d38d65e7200c357e260a8655dbd4ec6b292897811db7492b7178dbfb8e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

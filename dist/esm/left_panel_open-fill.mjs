export const name="left_panel_open-fill";
export const id="dl_a4043b184e5aba06ed40";
export const url=new URL("../icons/left_panel_open-fill.svg?v=fea636354038d16b1b32b4e1295b89a577de9babe639b3aa988c42932f16d4a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

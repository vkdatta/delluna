export const name="bottom_panel_open";
export const id="dl_3d56171f2d2ba733a2ae";
export const url=new URL("../icons/bottom_panel_open.svg?v=6332271d8ffe42ed2ec8356a291bf1ee996035e4fe0a3522e60f912330be16db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

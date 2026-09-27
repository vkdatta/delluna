export const name="groups-fill";
export const id="dl_3074fb2d390166d77d99";
export const url=new URL("../icons/groups-fill.svg?v=d2934dfd956aa62c4c88ffba8166218aa9637f090c0a7c7457dec4d4704b636d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

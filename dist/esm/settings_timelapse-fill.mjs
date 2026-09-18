export const name="settings_timelapse-fill";
export const id="dl_b99eafb1d71746a58a90";
export const url=new URL("../icons/S/settings_timelapse-fill.svg?v=01c8657c4ba24aa3fc5e9778c7df7e633d89b7a84ae2a091d8e100af3c821652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

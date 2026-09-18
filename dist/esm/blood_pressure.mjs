export const name="blood_pressure";
export const id="dl_6729c8acaa8e43709618";
export const url=new URL("../icons/blood_pressure.svg?v=5ed8b973dbc282abf11f3c83e1aa4f52bc5acce1e72a916eedd640f10eeadabb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

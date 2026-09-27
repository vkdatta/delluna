export const name="delete_history-fill";
export const id="dl_d0e40ca08fbf863383cf";
export const url=new URL("../icons/delete_history-fill.svg?v=940e4faabff83fe08311217a188872ae6870f095d15615fb2069661db8ccc2f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

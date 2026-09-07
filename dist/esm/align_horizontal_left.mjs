export const name="align_horizontal_left";
export const id="dl_49d48a1ed0f4f5b1e837";
export const url=new URL("../icons/align_horizontal_left.svg?v=60ace7b63e63d02573fbe9b4496f77eb83be9372f5bb358a6dd7de2752a58511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

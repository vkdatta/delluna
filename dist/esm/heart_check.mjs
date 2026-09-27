export const name="heart_check";
export const id="dl_1c31f825206df76a927d";
export const url=new URL("../icons/heart_check.svg?v=05eb3860c068e6a6eeba618ea26541b379fb9eb62b2ba228c80e5759e6c10138",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

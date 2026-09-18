export const name="list_alt_check-fill";
export const id="dl_e95e5eab875a4ad4ba9d";
export const url=new URL("../icons/list_alt_check-fill.svg?v=91bb260300fa2250059ce4fb49dd5b9ca9776b13972595c684a6a396dbb4b8da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

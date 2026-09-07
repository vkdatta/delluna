export const name="grid-nine-fill";
export const id="dl_e8d56d9611b94fd6b51d";
export const url=new URL("../icons/grid-nine-fill.svg?v=73ca6c09ef9c563b8ccf85ea70153ec7f13f6ac99210049c17c76d46884066fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

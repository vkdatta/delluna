export const name="turn_right-fill";
export const id="dl_8c9b8ce85dec92f074e6";
export const url=new URL("../icons/turn_right-fill.svg?v=98823c81cc1661d3589953a0690ac94c8b8b30235e12ef7657d411337c8e7a24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

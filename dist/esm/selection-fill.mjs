export const name="selection-fill";
export const id="dl_e5225743e9f514c0bc06";
export const url=new URL("../icons/selection-fill.svg?v=1b2958062741bf461f1021a60b63b6890b1f19321bc9b5575078a9440bf99f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

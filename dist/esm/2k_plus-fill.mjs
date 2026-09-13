export const name="2k_plus-fill";
export const id="dl_8713180ea47e4937b639";
export const url=new URL("../icons/2/2k_plus-fill.svg?v=d83530cea3abaa73881ba00e8715c771d21c8155609cbbce4fd0ab05798ff061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

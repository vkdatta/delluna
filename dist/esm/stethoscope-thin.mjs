export const name="stethoscope-thin";
export const id="dl_835a96bb0a72a73700a4";
export const url=new URL("../icons/stethoscope-thin.svg?v=5a4e227744d619deaea7144f2956c84d5437fa1e2fd98317a0eb22650a94e160",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

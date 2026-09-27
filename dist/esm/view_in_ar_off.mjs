export const name="view_in_ar_off";
export const id="dl_eb35b7d9ee26b513ddd2";
export const url=new URL("../icons/view_in_ar_off.svg?v=8a7bf228396ea0d572da6402b36482a3347311bd0458e53acb438b5f47060429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

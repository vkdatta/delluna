export const name="volcano-fill";
export const id="dl_668724920917466aff5b";
export const url=new URL("../icons/volcano-fill.svg?v=874bdc1b5d9cd48198281890c8a1f7034b1c041079def8274e924670885ba294",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

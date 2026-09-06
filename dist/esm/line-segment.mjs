export const name="line-segment";
export const id="dl_ed08c186411242da9302";
export const url=new URL("../icons/line-segment.svg?v=34bb472adfc45207fb72feea287bb3add08301d4c328e694441d32922914f0d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

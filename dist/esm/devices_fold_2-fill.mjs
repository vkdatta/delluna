export const name="devices_fold_2-fill";
export const id="dl_154ca257e96437d627f9";
export const url=new URL("../icons/devices_fold_2-fill.svg?v=e0c526b4945c8103c4ceb60c441c0af04bf198d43925f1595f75163c96f0eab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

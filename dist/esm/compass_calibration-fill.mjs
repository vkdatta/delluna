export const name="compass_calibration-fill";
export const id="dl_aaed653b8fd5f9deda1a";
export const url=new URL("../icons/compass_calibration-fill.svg?v=71bc3a64fcde6610b166ef0702ea46cd097dd03c66009a25fc7a7bb3a65bbd1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

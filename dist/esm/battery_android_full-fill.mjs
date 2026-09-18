export const name="battery_android_full-fill";
export const id="dl_2f65a1d10dc34b28b472";
export const url=new URL("../icons/battery_android_full-fill.svg?v=37764b6207a60b091b73542869e0142a73d4c1802b24c45a34277d7e1ccdbc32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

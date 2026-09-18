export const name="thermometer_gain-fill";
export const id="dl_445d76618267413fbe14";
export const url=new URL("../icons/T/thermometer_gain-fill.svg?v=8d0d1b8ab4e0973346dc328097a5fadf1ee0963cb3ab37a4a8746161c6e610aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

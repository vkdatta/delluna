export const name="check_alert-fill";
export const id="dl_0a0fccb83739dd572e3f";
export const url=new URL("../icons/check_alert-fill.svg?v=452e453c8f8588b77a951b0276267aa547898a0eab05452b94ea37d8171356f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

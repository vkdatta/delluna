export const name="railway_alert_2";
export const id="dl_dd31f291980d60bd7d4e";
export const url=new URL("../icons/railway_alert_2.svg?v=b1371889010d6649f5b3c0096ba36c31ed7ce2d4d9a510a1bf4133dd9c266572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

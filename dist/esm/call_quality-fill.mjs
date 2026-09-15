export const name="call_quality-fill";
export const id="dl_7f981a5bc9fc451aacf4";
export const url=new URL("../icons/C/call_quality-fill.svg?v=d4e367adb535451c97034b3e2ee738b294bfc05ffea6455d15c020dc46ff9b83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

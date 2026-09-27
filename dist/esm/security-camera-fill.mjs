export const name="security-camera-fill";
export const id="dl_41944d4f5ca78e001723";
export const url=new URL("../icons/security-camera-fill.svg?v=8a5c843fa36f47c3080d8de93ff69698f17f4eeb3708896bbbdfb29061b092df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

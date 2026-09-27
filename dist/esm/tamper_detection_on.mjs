export const name="tamper_detection_on";
export const id="dl_eabbeb5f79421b1570b3";
export const url=new URL("../icons/tamper_detection_on.svg?v=40c696f451495079178c0df02f94bcc8c12bca9603e6a3abdbd7b7d060a2af91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

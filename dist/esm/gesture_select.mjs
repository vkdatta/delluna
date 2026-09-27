export const name="gesture_select";
export const id="dl_4eeff87662980694faf3";
export const url=new URL("../icons/gesture_select.svg?v=a37493a2cebe112b45a129d01146222b5614fbbd57244e093a94de0b0506a0ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

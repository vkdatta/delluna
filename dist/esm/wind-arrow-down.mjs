export const name="wind-arrow-down";
export const id="dl_34144465a79d434c8a2b";
export const url=new URL("../icons/wind-arrow-down.svg?v=46e64ee4f724dd3e1afe7f7daef59bc50910d243adb5e82d558b9ca44ff81d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
